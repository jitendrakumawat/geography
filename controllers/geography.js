const { State } = require('../models/state')
const { Districts } = require('../models/district')
const { Parliamentaryconstituency } = require('../models/parliamentry')

const { handleSuccess, handleError } = require('../helpers/helpers')

exports.getStates = (req, res) => {
    State.find({}, function (err, states) {
        var userMap = {};
        states.forEach(function (state) {
            // uncomment below and map in case only state and state code is needed in response
            // var stateinfo = {}
            // stateinfo['state']= state.state
            // stateinfo['stateCode']= state.stateCode
            userMap[user._id] = state;
        });
        res.send(userMap);
    });
}

exports.getDistrictByStateId = (req, res) => {
    const stateId = req.params ? req.params.id : null;
    if (stateId) {
        State.findOne({ "stateCode": stateId }, function (err, districts) {
            if (!err) {
                res.send(districts)
            }
        })
    } else {
        res.status(500);
        res.json({
            message: "State Id is required",
        });
    }
}
exports.getParliamentryByStateId= (req, res) => {
    const stateId = req.params ? req.params.id : null;
    if (stateId) {
        Parliamentaryconstituency.findOne({ "stateCode": stateId }, function (err, parliamentry) {
            if (!err) {
                res.send(parliamentry)
            }
        })
    } else {
        res.status(500);
        res.json({
            message: "state Id is required",
        });
    }
}

exports.getSubDistrictByDistId = (req, res) => {
    const distId = req.params ? req.params.id : null;
    if (distId) {
        Districts.findOne({ "districtCode": distId }, function (err, subDistricts) {
            if (!err) {
                res.send(subDistricts)
            }
        })
    } else {
        res.status(500);
        res.json({
            message: "District Id is required",
        });
    }
}