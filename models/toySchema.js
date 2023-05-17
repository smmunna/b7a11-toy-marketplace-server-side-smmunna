/*
Picture URL of the toy,
Name,
seller name (if available from the logged in user)
seller email (info from the logged in user)
Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
Price,
Rating,
Available quantity
Detail description
*/ 
const mongoose = require('mongoose')

const toySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sellerName:String,
    sellerEmail:String,
    subCategory:String,
    price:Number,
    rating:Number,
    quantity:{
        type:String,
        enum:['Available','Not available']
    },
    description:String,
    img:String
})

const toysModel = mongoose.model('toyInfo',toySchema)

module.exports = toysModel