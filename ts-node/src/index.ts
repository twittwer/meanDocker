import { Server } from "./server";

let port = 8042;

let server: Server = Server.bootstrap(port);
server.start();