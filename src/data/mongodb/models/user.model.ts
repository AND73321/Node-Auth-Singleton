import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name es necesario']
  },
  email: {
    type: String,
    required: [true, 'Email es necesario'],
    unique: true
  },
  password: {
    type: String, 
    required: [true, 'Password es necesario'],
  },
  img: {
    type: String,
  },
  roles: {
    type: [String],
    default: ['USER_ROLE'],
    enum: ['USER_ROLE','ADMIN_ROLE'],
  }

});

export const UserModel = mongoose.model('User', userSchema );