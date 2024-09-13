import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    tite: {
      type: String,
      require: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.Model('SubTodo', subTodoSchema);
