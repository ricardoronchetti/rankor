const { Schema, model } = require('mongoose')

const gameSchema = new Schema(
    {
        name: String,
        description: String,
        genre: String,
        publisher: String,
        screenshot: String,
    },
    {
        timestamps: true,
    }
)

const Game = model('Game', gameSchema)

module.exports = Game