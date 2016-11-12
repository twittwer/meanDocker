import * as express from 'express';
import AbstractRouter from './abstract-router';

export default class RootRouter extends AbstractRouter {
  configure (): void {

    // this._router.use( '/users', new PostRouter().getRouter() );

    this._router.get( '/', ( req: express.Request, res: express.Response ) => {
    } );
  }
}
