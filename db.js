const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoD connection URL
const mongoURL = process.env.Mongodb_online; //'mongodb://localhost:27017/hotels' // Replace database name

// Set db MongoDB connection
mongoose.connect (mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true    
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
    console.error('error to MongoDB server', err);
});
db.on('disconnected', () => {
    console.log('disconnected to MongoDB server');
});

// Export db connection
module.exports = db
