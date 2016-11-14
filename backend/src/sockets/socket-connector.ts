import SocketServer = SocketIO.Server;

export interface Socket extends SocketServer {
  username?: string;
}

type RegisterCallback = ( socket: Socket ) => void;

export class SocketConnector {
  private socketServer: Socket;
  private registerCallbacks: RegisterCallback[] = [];
  private connectedSockets: { [key: string]: Socket } = {};

  constructor ( socketServer: Socket, registerCallback: RegisterCallback | RegisterCallback[] ) {
    this.socketServer = socketServer;

    if ( registerCallback instanceof Array ) {
      this.registerCallbacks = <RegisterCallback[]>registerCallback;
    } else {
      this.registerCallbacks.push( <RegisterCallback>registerCallback );
    }

    this.configure();
  }

  private configure (): void {

    this.socketServer.on( 'connection', ( socket: Socket ) => {

      /* question
       * TODO: extract user management
       * Maybe separate registerCallbacks and connectionCallbacks
       */
      socket.on( 'register', ( data: any ) => {
        this.connectedSockets[ data.username ] = socket;
        socket.username = data.username;

        console.log( `>> new socket registration: ${data.username}` );
        console.log( `>> socket list: ${Object.keys( this.connectedSockets )}` );

        this.registerCallbacks.forEach( ( callback: RegisterCallback ) => callback( socket ) );
      } );

      socket.on( 'disconnect', () => {
        if ( socket.username ) {
          delete this.connectedSockets[ socket.username ];
        }
      } );

      socket.emit( 'connected' );
    } );
  }
}

export default SocketConnector;
