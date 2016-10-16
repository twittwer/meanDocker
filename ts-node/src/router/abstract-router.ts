import * as Express from "express";

abstract class AbstractRouter {
  protected _router: Express.Router;

  constructor() {
    this._router = Express.Router();
    this.configure();
  }

  abstract configure(): void;

  public getRouter(): Express.Router {
    return this._router;
  }
}

export default AbstractRouter;