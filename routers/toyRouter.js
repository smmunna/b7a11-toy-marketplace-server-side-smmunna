const router = require('express').Router()
require('../database/db')
const toysModel = require('../models/toySchema')

// Update individual data of added toys
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const toysPrice = req.body.price
    const toysQuantity = req.body.quantity
    const toysDetail = req.body.description

    const filter = { _id: id };
    const update = {
        price: toysPrice,
        quantity: toysQuantity,
        description: toysDetail
    };

    try {
        const result = await toysModel.findOneAndUpdate(filter, update, {
            new: true
        })
        res.send(result)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

// DELETE individual data from the database;
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await toysModel.deleteOne({ _id: id })
        res.send(result)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

// Get individual data from the database;
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await toysModel.findOne({ _id: id })
        res.send(result)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

// Toy Information inserting to the MongoDB
router.post('/', async (req, res) => {
    try {
        const toysInfo = toysModel(req.body)
        const result = await toysInfo.save()
        res.send(result)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

// Getting all the data from the database;
router.get('/', async (req, res) => {
    try {
        const result = await toysModel.find()
        res.send(result)
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

module.exports = router