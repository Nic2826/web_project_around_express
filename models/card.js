import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:30
  },
  link: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:30
  },
  owner: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  }
});