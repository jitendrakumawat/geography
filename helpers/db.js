const mongoose =  require('mongoose')
mongoose.Promise = require('bluebird')
const mongoURI = 'mongodb://localhost/ekaushalnsdc'
const options = {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 100, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity\
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
   mongoose.connect(mongoURI, options)
 
mongoose.connection.on('connected', function () {
    console.log("Mongoose default connection is open to ");
});

mongoose.connection.on('error', function (err) {
    console.log("Mongoose default connection has occured ");
});

mongoose.connection.on('disconnected', function () {
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});
  module.exports = {
    mongoose
  }
