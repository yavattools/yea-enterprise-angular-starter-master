import { Injectable, Optional } from '@angular/core';
import {
  timer,
  Observable,
  Subject,
  Subscription,
  merge,
  fromEvent,
  from,
  interval,
  of
} from 'rxjs';
import {
  first,
  tap,
  take,
  finalize,
  map,
  scan,
  bufferTime,
  filter,
  takeUntil,
  switchMap,
  distinctUntilChanged
} from 'rxjs/operators';

/**
 * User's idle service.
 */
@Injectable()
export class UserIdleService {
  ping$: Observable<any>;

  /**
   * Events that can interrupts user's inactivity timer.
   */
  private readonly activityEvents$: Observable<any>;

  private timerStart$ = new Subject<boolean>();
  private timeout$ = new Subject<boolean>();
  private idle$: Observable<any>;
  private timer$: Observable<any>;
  /**
   * Idle value in seconds.
   * Default equals to 10 minutes.
   */
  private idle: number = 600;
  /**
   * Timeout value in seconds.
   * Default equals to 1 minutes.
   */
  private timeout: number = 300;
  /**
   * Ping value in seconds.
   */
  private ping: number = 120;
  /**
   * Timeout status.
   */
  private isTimeout: boolean;
  /**
   * Timer of user's inactivity is in progress.
   */
  private isInactivityTimer: boolean;

  private idleSubscription: Subscription;

  constructor() {
    this.activityEvents$ = merge(
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'resize'),
      fromEvent(document, 'keydown')
    );

    this.idle$ = from(this.activityEvents$);
  }

  /**
   * Start watching for user idle and setup timer and ping.
   */
  startWatching() {
    /**
     * If any of user events is not active for idle-seconds when start timer.
     */
    this.idleSubscription = this.idle$
      .pipe(
        bufferTime(5000), // Starting point of detecting of user's inactivity
        filter(arr => !arr.length && !this.isInactivityTimer),
        switchMap(() => {
          this.isInactivityTimer = true;
          return interval(1000).pipe(
            takeUntil(
              merge(
                this.activityEvents$,
                timer(this.idle * 1000).pipe(
                  tap(() => this.timerStart$.next(true))
                )
              )
            ),
            finalize(() => (this.isInactivityTimer = false))
          );
        })
      )
      .subscribe();

    this.setupTimer(this.timeout);
    this.setupPing(this.ping);
  }

  stopWatching() {
    this.stopTimer();
    if (this.idleSubscription) {
      this.idleSubscription.unsubscribe();
    }
  }

  stopTimer() {
    this.timerStart$.next(false);
  }

  resetTimer() {
    this.stopTimer();
    this.isTimeout = false;
  }

  /**
   * Return observable for timer's countdown number that emits after idle.
   * @return {Observable<number>}
   */
  onTimerStart(): Observable<number> {
    return this.timerStart$.pipe(
      distinctUntilChanged(),
      switchMap(start => (start ? this.timer$ : of(null)))
    );
  }

  /**
   * Return observable for timeout is fired.
   * @return {Observable<boolean>}
   */
  onTimeout(): Observable<boolean> {
    return this.timeout$.pipe(
      filter(timeout => !!timeout),
      map(() => {
        this.isTimeout = true;
        return true;
      })
    );
  }

  /**
   * Setup timer.
   *
   * Counts every seconds and return n+1 and fire timeout for last count.
   * @param timeout Timeout in seconds.
   */
  private setupTimer(timeout: number) {
    this.timer$ = interval(1000).pipe(
      take(timeout),
      map(() => 1),
      scan((acc, n) => acc + n),
      map(count => {
        if (count === timeout) {
          this.timeout$.next(true);
        }
        return count;
      })
    );
  }

  setConfigValue(config: any): void {
    this.idle = config.idle;
    this.timeout = config.timeout;
    this.ping = config.ping;
  }
  /**
   * Setup ping.
   *
   * Pings every ping-seconds only if is not timeout.
   * @param {number} ping
   */
  private setupPing(ping: number) {
    this.ping$ = interval(ping * 1000).pipe(filter(() => !this.isTimeout));
  }
}
