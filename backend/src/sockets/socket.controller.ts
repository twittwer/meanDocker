import socketio = require("socket.io");
import { Server as HttpServer } from 'http';
import SocketServer = SocketIO.Server;
import Socket = SocketIO.Socket;

export class SocketController {
  private static socketController: SocketController;
  private socketServer: SocketServer;

  public static get (): SocketController {
    return new SocketController();
  }

  constructor ( httpServer?: HttpServer ) {
    if ( !SocketController.socketController ) {
      if ( !httpServer ) {
        throw new Error( 'HttpServer is missing to create a new SocketController' );
      }
      this.socketServer = socketio( httpServer );
      this.bootstrap();
      SocketController.socketController = this;
    }
    return SocketController.socketController;
  }

  private bootstrap (): void {
    this.socketServer.on( 'connection', ( socket: Socket ) => {

      // TODO: register listeners and handlers
      // Question: Handle user registration in controller?

      socket.on( 'disconnect', () => {
        // handle termination of socket connection
      } );

      socket.emit( 'connected' );
    } );
  }

  public emitToPublic ( event: BackendEmittedEvent, data: any = null, callback?: Function ): void {
    let eventString: string = BackendEmittedEvent[ event ];
    this.socketServer.emit( eventString, data, callback );
  }

  public emitToRoom ( room: string, event: BackendEmittedEvent, data: any = null, callback?: Function ): void {
    let eventString: string = BackendEmittedEvent[ event ];
    this.socketServer.in( room )
      .emit( eventString, data, callback );
  }
}

enum BackendEmittedEvent {
  DataUpdate
}
