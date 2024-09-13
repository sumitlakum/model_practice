import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      unique: true,
      type: String,
      require: [true, 'user email is required'],
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      max: [6, 'password must be {VALUE}'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.Model('User', userSchema);
