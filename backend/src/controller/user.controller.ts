import { Request, Response } from 'express-serve-static-core';
import { UserModel, User } from '../models/user.model';

export default class UserController {

  public static create ( req: Request, res: Response ): void {
    let user: UserModel = req.body;

    User.create( user )
      .then( ( user: UserModel ) => {
        res.location( req.originalUrl + '/' + user.username );
        res.status( 201 )
          .json( user );
      } )
      .catch( ( error: any ) => {
        // TODO: design a standard error handler for mongoose errors
        res.status( 500 )
          .json( error );
      } );
  }
}
