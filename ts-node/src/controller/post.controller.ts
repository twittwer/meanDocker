import * as Express from "express";
import { Post, IPost } from "../models/post.model";
import { CastError } from "mongoose";

export default class PostController {

  public static create(req: Express.Request, res: Express.Response): void {
    let post = new Post(req.body);
    post.save()
      .then((result: IPost) => res.status(201).json(result))
      .catch((err: any) => res.status(500).send(`DB Error: ${err.toString()}`));
  }

  public static list(req: Express.Request, res: Express.Response): void {
    Post.find()
      .then((result: IPost[]) => res.json(result))
      .catch((err: any) => res.status(500).send(`DB Error: ${err.toString()}`));
  }

  public static get(req: Express.Request, res: Express.Response): void {
    Post.findOne({ _id: req.params.id })
      .then((result: IPost) => res.json(result))
      .catch((err: any) => {
        // console.log(err);
        if (err.name === 'CastError') {
          res.status(400).json({ message: `Invalid ${err.path}`, error: err.toString() });
          return;
        }
        res.status(500).json({ message: `DB Error: ${err}` });
      });
  }
}