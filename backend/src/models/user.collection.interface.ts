import * as Mongoose from 'mongoose';
import { UserModel } from './user.model';
import { CollectionConfig } from './config.interface';

export interface UserCollection extends Mongoose.Model<UserModel> {
  findByUsername: ( username: string )=>Promise<UserModel>;
}

export class UserCollectionConfig implements CollectionConfig {

  static setMethods ( userSchema: Mongoose.Schema ): void {

    // Question: Direct assignments (UserModelConfig) vs HashMap (UserCollectionConfig)
    let staticMethods: {[name: string]: Function} = {};

    staticMethods[ 'findByUsername' ] = function ( username: string ): Promise<UserModel> {
      return this.findOne( { username: username } );
    };

    userSchema.static( staticMethods );
  }
}
