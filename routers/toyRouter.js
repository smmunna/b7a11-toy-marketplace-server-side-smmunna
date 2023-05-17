const router = require('express').Router()
require('../database/db')
const toysModel = require('../models/toySchema')

// Toy Information inserting to the MongoDB
router.post('/',async(req,res)=>{
    const toysInfo = toysModel(req.body)
    const result = await toysInfo.save()
    res.send(result)
})

router.get('/',async(req,res)=>{
    res.send('I am grom toyRouter')
})

module.exports = router