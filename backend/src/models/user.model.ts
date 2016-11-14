import * as Mongoose from 'mongoose';
import { UserCollection, UserCollectionConfig } from './user.collection.interface';
import { UserModelConfig, UserModel } from './user.model.interface';

let UserSchema: Mongoose.Schema = new Mongoose.Schema( {
  username   : {
    type  : String,
    unique: true,
    index : true
  },
  displayName: {
    type: String
  },
  created_at : {
    type   : Date,
    default: Date.now
  }
}, {
  strict         : true,
  useNestedStrict: true
} );

UserCollectionConfig.setMethods( UserSchema );

UserModelConfig.setVirtual( UserSchema );

UserModelConfig.setMethods( UserSchema );


export { UserModel };
export const User = <UserCollection>Mongoose.model<UserModel>( 'User', UserSchema );
