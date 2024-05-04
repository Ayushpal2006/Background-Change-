const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Pin');
// Define Post Schema
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  Users:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
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

