import * as express from 'express';
import AbstractRouter from './abstract-router';
import UserRouter from './user.router';

export default class RootRouter extends AbstractRouter {
  protected configure (): void {

    //noinspection TypeScriptValidateTypes
    this.router.use( '/users', (new UserRouter).get() );

    this.router.get( '/', ( req: express.Request, res: express.Response ) => {
      res.status( 200 )
        .send( {
          router  : 'RootRouter',
          children: [ 'users' ]
        } );
    } );
  }
}
