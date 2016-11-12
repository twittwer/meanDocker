import * as Mongoose from 'mongoose';

export interface CollectionConfig {
  setMethods?: ( schema: Mongoose.Schema ) => void;
}

export interface ModelConfig {
  setMethods?: ( schema: Mongoose.Schema ) => void;
  setVirtual?: ( schema: Mongoose.Schema ) => void;
}
