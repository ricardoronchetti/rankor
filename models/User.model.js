const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    description: String,
    avatar: String,
    skills: String,
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
    playedGames: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true,
  }
)

module.exports = model('User', userSchema)