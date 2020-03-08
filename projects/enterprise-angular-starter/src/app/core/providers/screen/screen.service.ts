import { Injectable } from '@angular/core';

@Injectable()
export class ScreenService {
  public screenWindowHeight: number;
  public screenWindowWidth: number;

  constructor() {
    this.screenWindowHeight = 0;
    this.screenWindowWidth = 0;
  }
}
