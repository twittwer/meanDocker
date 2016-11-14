import { Request, Response } from 'express-serve-static-core';
import { UserModel, User } from '../models/user.model';

export default class UserController {

  public static list ( req: Request, res: Response ): void {
    User.find()
      .then( ( users: UserModel[] ) => {
        res.status( 200 )
          .json( users );
      } )
      .catch( ( error: any ) => {
        // TODO: design a standard error handler for mongoose errors
        res.status( 500 )
          .json( error );
      } );
  }

  public static details ( req: Request, res: Response ): void {
    User.findByUsername( req.params.username )
      .then( ( user: UserModel ) => {
        if ( !user ) {
          res.status( 404 )
            .send();
        } else {
          res.status( 200 )
            .json( user );
        }
      } )
      .catch( ( error: any ) => {
        // TODO: design a standard error handler for mongoose errors
        res.status( 500 )
          .json( error );
      } );
  }

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
