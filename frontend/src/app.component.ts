import { Component } from '@angular/core';
import { SocketService } from './core/socket.service';
import { BackendEmittedEvent, FrontendEmittedEvent } from './shared/sockets/socket-events.enum';
import { UserService } from './core/user.service';

@Component( {
  moduleId: module.id,
  selector: 'main-app',
  template: `
    <h1>Frontend - It works!</h1>
    <h3>- Powered by Angular2</h3>
    <h6>Welcome {{userService.getUsername()||"Anonymous"}}</h6>
  `
} )
export class AppComponent {

  constructor ( private socketService: SocketService, private userService: UserService ) {
    socketService.on( BackendEmittedEvent.DataUpdate, ( data: any )=> {
      console.log( data );
    } );
    socketService.emit( FrontendEmittedEvent.Login );
  }
}

