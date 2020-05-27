const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const creds = require('../config/creds')

module.exports = function (app) {
    const corsOptions = {
        origin: (origin, callback) => {
            if (!origin || creds.CORS_ALLOWED.indexOf(origin) != -1) {
                callback(null, true)
            }
        },
        credentials: true
    }
    app.use(cors(corsOptions))
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.header('origin'))
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type')
        res.header('Access-Control-Expose-Headers', '')
        if (req.method === 'OPTIONS') return res.send(200);
        next();
    });
}
