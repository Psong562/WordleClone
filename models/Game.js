const { Schema, model } = require('mongoose')

const Game = new Schema({
  absentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  boardRowStatus: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  absentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  boardWords: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  correctCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  presentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  presentCharArray: [{
    type: String,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  rowIndex: [{
    type: Number,
    maxlength: 5,
    minlength: 1,
    required: false
  }],
  solution: [{
    type: String,
    maxlength: 5,
    minlength: 5,
    required: true
  }],
 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

module.exports = model('Game', Game)




