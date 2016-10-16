import AbstractRouter from "./abstract-router";
import PostController from "../controller/post.controller";

export default class PostRouter extends AbstractRouter {
  configure(): void {
    this._router.get('/', PostController.list);
    this._router.post('/', PostController.create);
    this._router.get('/:id', PostController.get);
  }
}