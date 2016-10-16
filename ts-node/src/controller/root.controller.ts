import * as Express from "express";

export default class RootController {
  public static welcome(req: Express.Request, res: Express.Response): void {
    res.send('Backend - It works!<br/>Welcome and try <a href="/posts">/posts</a> and <a href="/posts/1">/posts/:id</a>.');
  }
}