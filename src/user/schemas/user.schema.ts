import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  mobile: String,
  password: String
})
