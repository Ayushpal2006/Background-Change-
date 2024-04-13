const mongoose = require('mongoose');

mon

// Define Post Schema
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  }
});

// Define and export Post model
module.exports = mongoose.model('Post', postSchema);

