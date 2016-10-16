import * as express from "express";
import { Controller, Get, Res } from "routing-controllers";

@Controller('/')
export class RootController {

  @Get()
  welcome(@Res() res: express.Response): void {
    res.send(`
        Backend - It works!<br/>
        Try <a href="/posts">/posts</a> and <a href="/posts/1">/posts/:id</a>.
    `);
  }
}