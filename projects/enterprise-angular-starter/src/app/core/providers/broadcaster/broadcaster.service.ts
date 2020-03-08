import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
  Subscription,
  of,
  empty
} from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
  mergeMap,
  withLatestFrom,
  filter
} from 'rxjs/operators';

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable()
export class BroadcasterService {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this._eventBus.next({ key, data });
  }

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable().pipe(
      filter(event => event.key === key),
      map(event => <T>event.data)
    );
  }
}
