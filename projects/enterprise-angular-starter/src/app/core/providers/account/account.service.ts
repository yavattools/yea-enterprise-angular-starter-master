import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage';

@Injectable()
export class AccountService {
  constructor(private storageService: LocalStorageService) {}

  get token(): string {
    const token = this.storageService.getItem('auth');
    return token;
  }

  set token(token: string) {
    if (!token) {
      this.storageService.removeItem('auth');
    } else {
      this.storageService.setItem('auth', token);
    }
  }

  get username() {
    const username = this.storageService.getItem('username');
    return username;
  }

  set username(username: string) {
    if (!username) {
      this.storageService.removeItem('username');
    } else {
      this.storageService.setItem('username', username);
    }
  }
}
