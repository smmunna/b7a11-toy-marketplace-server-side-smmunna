const express = require('express')
const app = express()
require('dotenv').config()
require('./database/db')
const cors = require('cors');
const toyRouter = require('./routers/toyRouter')
const port = process.env.PORT || 5000

// Adding Middlewares
app.use(cors())
app.use(express.json())

// Routings for toy's
app.use('/toys', toyRouter)

app.get('/', (req, res) => {
    res.send('Toy Market Place server is successfully running..')
})
app.get('*', (req, res) => {
    res.send('No Routes Found..!')
})


app.listen(port, () => console.log('> Server is up and running on port : ' + port))