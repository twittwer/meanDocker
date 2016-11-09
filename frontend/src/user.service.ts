import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  // private username: string;

  /* Init */
  constructor () {
    // this.username = null;
  }
}

export interface User {
  _id?: string;
  username: string;
}