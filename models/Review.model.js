const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        rated: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        rater: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        }
    },
    {
        timestamps: true,
    }
)

const Review = model('Review', reviewSchema)

module.exports = Review