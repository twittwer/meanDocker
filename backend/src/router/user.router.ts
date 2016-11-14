import AbstractRouter from './abstract-router';
import UserController from '../controller/user.controller';

export default class UserRouter extends AbstractRouter {
  protected configure (): void {

    this.router.get( '/', UserController.list );
    this.router.post( '/', UserController.create );
    this.router.get( '/:username', UserController.details );
  }
}
