
const mongoose = require('mongoose')

//Schema for test scores in mongoDB databse
const TestScoreSchema = mongoose.Schema(
    {
        testname: {
            type: String,
            true: true
        },

        user: {
            type: String,
            required: true
        },

        score: {
            type: Number,
            default: 0
        },
    },

    {
        timestamps: true
    }

);


const TestScore = mongoose.model("TestScore", TestScoreSchema)

module.exports = TestScore;