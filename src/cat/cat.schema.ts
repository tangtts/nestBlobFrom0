import * as mongoose from 'mongoose';
export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  date: { type: Date, default: Date.now }
});