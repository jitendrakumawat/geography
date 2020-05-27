var express = require('express')
const { State } = require('../models/state')
const geography = require('../controllers/geography')
const router = express.Router()


module.exports = (app) => {
  app.get('/states', geography.getStates)
  app.get('/getDistrictByStateId/:id', geography.getDistrictByStateId)
  app.get('/getSubDistricts/:id', geography.getSubDistrictByDistId)
  app.get('/getParliamentryConstByStateId/:id', geography.getParliamentryByStateId)
  // app.get('/getVillageByDistId/:id', geography.getParliamentryByStateId)
}