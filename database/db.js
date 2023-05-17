const mongoose = require('mongoose');
require('dotenv').config()

// For Running Locally
const uri = "mongodb://127.0.0.1:27017/toysDB";

// MongoDB Atlas connection URL
// const uri = `mongodb+srv://<username>:<password>@cluster0.rvrwrto.mongodb.net/<database>?retryWrites=true&w=majority`;

// Establish the connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for the connection
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Successfully.');
});

// Define and export the Mongoose connection for use in other parts of your application
module.exports = db;