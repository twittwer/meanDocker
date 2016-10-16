import * as express from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";

export class Server {
  private app: express.Application;
  private port: number;

  public static bootstrap(port: number): Server {
    return new Server(port);
  }

  constructor(port: number) {
    this.port = port;

    this.app = createExpressServer({
      controllers: [ __dirname + "/controller/**/*.controller.js" ]
    });
  }

  public start() {
    this.app.listen(this.port,
      () => console.log(`App is listing on port ${this.port}!`)
    );
  }
}