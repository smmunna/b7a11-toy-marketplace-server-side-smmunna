const router = require('express').Router()


router.get('/',async(req,res)=>{
    res.send('I am grom toyRouter')
})

module.exports = router