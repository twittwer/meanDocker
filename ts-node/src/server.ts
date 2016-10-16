import mongoose = require("mongoose");
import * as Express from "express";
import * as bodyParser from "body-parser";

import RootRouter from "./router/root.router";

export class Server {
  private app: Express.Application;
  private port: number;

  public static bootstrap(port: number = 3000, dbURI: string = 'mongodb://mongodb/app'): Server {
    return new Server(port, dbURI);
  }

  constructor(port: number, dbURI: string) {
    this.port = port;

    this.app = Express();

    this.configureMongoDB(dbURI);
    this.configureExpress();
    this.configureRouter();
  }

  public start(): void {
    this.app.listen(this.port,
      () => console.log(` Backend-App is listing on port ${this.port}!`)
    );
  }

  private configureMongoDB(dbURI: string): void {
    mongoose.connect(dbURI);

    mongoose.connection.on('connected', () => console.log(`Mongoose connected to ${dbURI}`));
    mongoose.connection.on('error', (err: any) => console.log(`Mongoose connection error: ${err.toString()}`));
    mongoose.connection.on('disconnected', () => console.log(`Mongoose disconnected from ${dbURI}`));

    mongoose.Promise = Promise;
  }

  private configureExpress(): void {
    this.app.use(bodyParser.json());
  }

  private configureRouter(): void {
    this.app.use('/', new RootRouter().getRouter());
  }
}