import { Component } from '@angular/core';
import { SocketService } from './core/socket.service';
import { BackendEmittedEvent, FrontendEmittedEvent } from './socket-events.enum';

@Component( {
  moduleId: module.id,
  selector: 'my-app',
  template: '<h1>Frontend - It works!</h1><h3>- Powered by Angular2</h3>'
} )
export class AppComponent {

  constructor ( private socketS: SocketService ) {
    socketS.on( BackendEmittedEvent.DataUpdate, ( data: any )=> {
      console.log( data );
    } );
    socketS.emit( FrontendEmittedEvent.Login );
  }
}

