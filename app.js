const express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    middleware = require('./middlewares/middlewares')
mongoose = require('mongoose')
const app = express()
const PORT = process.env.port || 3000



middleware(app)
routes(app)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
    .on('uncaughtException', (err) => {
        console.log('----uncoughtException occured while starting server')
        console.log(err)
    })
    .on('rejectionHandled', (err) => {
        console.log('---rejectionHandled-----')
        console.log(err)
    })

// const mongoURI = 'mongodb://localhost/ekaushalnsdc'
// const options = {
//     reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: 100, // Maintain up to 10 socket connections
//     // If not connected, return errors immediately rather than waiting for reconnect
//     bufferMaxEntries: 0,
//     connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity\
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// };
// mongoose.connect(mongoURI, options)

// mongoose.connection.on('connected', function () {
//     console.log(connected("Mongoose default connection is open to ", dbURL));
// });

// mongoose.connection.on('error', function (err) {
//     console.log(error("Mongoose default connection has occured " + err + " error"));
// });

// mongoose.connection.on('disconnected', function () {
//     console.log(disconnected("Mongoose default connection is disconnected"));
// });

// process.on('SIGINT', function () {
//     mongoose.connection.close(function () {
//         console.log(termination("Mongoose default connection is disconnected due to application termination"));
//         process.exit(0)
//     });
// });