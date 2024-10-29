const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:30
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:30
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    // validate:{}
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;