import { Injectable } from '@angular/core';
import { BackendEmittedEvent, FrontendEmittedEvent } from '../socket-events.enum';
import Socket = SocketIOClient.Socket;
import Emitter = SocketIOClient.Emitter;

declare var BACKEND: string;

@Injectable()
export class SocketService {
  public backendUrl = BACKEND;
  protected socket: Socket;

  constructor () {
    // TODO: check synchronicity of connection establishment
    // this.socket = io.connect( this.backendUrl );
  }

  // public on ( event: BackendEmittedEvent, listener: Function ): Emitter {
  public on ( event: BackendEmittedEvent, listener: Function ): void {
    let eventString: string|null = BackendEmittedEvent[ event ];

    if ( typeof eventString !== 'string' ) {
      throw new Error();
    }

    // return this.socket.on( eventString, listener );
    // TODO: save listener to reconfigure after disconnect
  }

  public emit ( event: FrontendEmittedEvent ): SocketService {
    let eventString: string|null = FrontendEmittedEvent[ event ];

    if ( typeof eventString !== 'string' ) {
      throw new Error();
    }

    // this.socket.emit( eventString );
    // TODO: have a look after synchronicity check (queuing?)
    return this;
  }

  /*
   * TODO: Manage Socket Reconnects
   * - retries in case of connection errors
   */
}