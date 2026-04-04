const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide an author'],
    },
    images: {
      type: [
        {
          url: String,
          id: String,
        },
      ],
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
  },
  { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
