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
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
    games: [{ type: Schema.Types.ObjectId, ref: 'Games' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User