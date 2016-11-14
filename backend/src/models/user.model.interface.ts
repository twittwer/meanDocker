import * as Mongoose from 'mongoose';
import { User } from '../shared/users/user.interface';
import { ModelConfig } from './config.interface';

export interface UserModel extends Mongoose.Document, User {
  name: string;

  forgotPassword: ()=>boolean;
}

export class UserModelConfig implements ModelConfig {

  static setVirtual ( userSchema: Mongoose.Schema ): void {

    userSchema.virtual( 'name' )
      .get( function () {
        return this.displayName ? this.displayName : this.username;
      } );
  }

  static setMethods ( userSchema: Mongoose.Schema ): void {

    userSchema.method( 'forgotPassword', function (): boolean {
      return true;
    } );
  }
}
