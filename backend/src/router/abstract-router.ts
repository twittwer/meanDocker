import * as express from 'express';

abstract class AbstractRouter {
  protected router: express.Router;

  constructor () {
    this.router = express.Router();
    this.configure();
  }

  protected abstract configure (): void;

  public get (): express.Router {
    return this.router;
  }
}

export default AbstractRouter;

/* Template for Router Instance
 *
 * import AbstractRouter from './abstract-router';
 * import SubTopicRouter from './sub-topic.router';
 * import TopicController from '../controller/topic.controller';
 *
 * export default class TopicRouter extends AbstractRouter {
 *    protected configure (): void {
 *
 *      //noinspection TypeScriptValidateTypes
 *      this.router.use( '/users', (new SubTopicRouter).get() );
 *
 *      this.router.get( '/',  TopicController.list );
 *      this.router.post( '/',  TopicController.create );
 *    }
 * }
 */
