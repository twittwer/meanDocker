import { Injectable } from '@angular/core';
import { BackendEmittedEvent, FrontendEmittedEvent } from '../socket-events.enum';
import Socket = SocketIOClient.Socket;
import Emitter = SocketIOClient.Emitter;

declare var BACKEND: string;

@Injectable()
export class SocketService {
  public backendUrl = BACKEND;
  protected socket: Socket;


  /*
   * TODO: Manage Socket Connection
   * - check synchronicity of connection establishment
   * - retries in case of connection errors
   */
  constructor () {
    // this.socket = io.connect( this.backendUrl );
  }

  // public on ( event: BackendEmittedEvent, listener: Function ): Emitter {
  public on ( event: BackendEmittedEvent, listener: Function ): void {
    let eventString: string|null = BackendEmittedEvent[ event ];

    if ( typeof eventString !== 'string' ) {
      throw new Error();
    }

    // TODO: save listener to reconfigure after disconnect
    // return this.socket.on( eventString, listener );
  }

  public emit ( event: FrontendEmittedEvent ): SocketService {
    let eventString: string|null = FrontendEmittedEvent[ event ];

    if ( typeof eventString !== 'string' ) {
      throw new Error();
    }

    // TODO: queue emitted events, if needed (have a look at synchronicity of connection)
    // this.socket.emit( eventString );
    return this;
  }
}
