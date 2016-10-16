import AbstractRouter from "./abstract-router";
import RootController from "../controller/root.controller";
import PostRouter from "./post.router";

export default class RootRouter extends AbstractRouter {
  configure(): void {
    this._router.use('/posts', new PostRouter().getRouter());

    this._router.get('/', RootController.welcome);
  }
}