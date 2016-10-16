import * as express from "express";
import { Controller, Get, Res, Param } from "routing-controllers";

@Controller('/posts')
export class PostController {

  @Get()
  getAll(@Res() res: express.Response): void {
    res.send('Enjoy all posts :)');
  }

  @Get('/:id')
  getOne(@Param('id') id: number, @Res() res: express.Response): void {
    res.send('Enjoy post no. ' + id);
  }
}