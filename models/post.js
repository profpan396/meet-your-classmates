const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({

  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const dislikesSchema = mongoose.Schema({

  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    q1: String,
    a1: String,
    q2: String,
    a2: String,
    q3: String,
    a3: String,
    likes: [likesSchema], 
    dislikes: [dislikesSchema] 
  }, {
    timestamps: true
  });
 

module.exports = mongoose.model('Post', postSchema);