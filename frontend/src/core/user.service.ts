import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable()
export class UserService {
  private username: string|null;

  /* Init */
  constructor ( private socketService: SocketService ) {
    this.username = null;
  }

  /* Getter */
  public getUsername (): string|null {
    return this.username;
  }
}
