const mongoose = require('mongoose')

const toySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sellername: String,
    selleremail: String,
    category: String,
    price: Number,
    rating: Number,
    quantity: {
        type: String,
        enum: ['Available', 'Not available']
    },
    description: String,
    img: String
})

const toysModel = mongoose.model('toyInfo', toySchema)

module.exports = toysModel