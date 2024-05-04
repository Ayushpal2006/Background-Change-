const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pin');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
    // default: 'default_dp.jpg' // You can set a default image path here
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Define and export User model
const User = mongoose.model('User', userSchema);

module.exports = User;
