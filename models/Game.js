const { Schema, model } = require('mongoose')

const Game = new Schema({
  absentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  boardRowStatus: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  absentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  boardWords: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  correctCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  presentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1
  },]
  presentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1
  }],
  rowIndex: [{
    type: Number,
    maxlength: 5,
    minlength: 1
  }],
  solution: [{
    type: String,
    maxlength: 5,
    minlength: 5
  }],
 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

module.exports = model('game', Game)




