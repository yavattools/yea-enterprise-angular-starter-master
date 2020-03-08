import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, ReplaySubject } from 'rxjs';
// import { filter, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class MediaQueryService {

  constructor(media: MediaObserver) {
    media.asObservable()
      .subscribe(res => this._changes$.next(res), err => this._changes$.error(err), () => this._changes$.complete());

    this._changes$.subscribe((change) => {
      this._lowerThanMedium.next((change[0].mqAlias === 'xs') || (change[0].mqAlias === 'sm'));
    });

    this._changes$.subscribe((change) => {
      this._lowerThanLarge.next((change[0].mqAlias === 'xs') || (change[0].mqAlias === 'sm') || (change[0].mqAlias === 'md'));
    });

  }

  private _lowerThanMedium = new ReplaySubject<boolean>(1);
  private _lowerThanLarge = new ReplaySubject<boolean>(1);

  private _changes$: ReplaySubject<MediaChange[]> = new ReplaySubject(1);

  private _alias$: ReplaySubject<string> = new ReplaySubject(1);
  public get alias$(): Observable<string> { return this._alias$.asObservable(); }
  
  get changes$(): Observable<MediaChange[]> {
    return this._changes$.asObservable();
  }

  get isLowerThanMedium$(): Observable<boolean> {
    return this._lowerThanMedium.asObservable();
  }

  get isLowerThanLarge$(): Observable<boolean> {
    return this._lowerThanLarge.asObservable();
  }
}
