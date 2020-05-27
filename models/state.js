const { mongoose } = require('../helpers/db')
const Schema =  mongoose.Schema;

const stateSchema =  new Schema({
    stateCode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    area: {
        type: String
    },
    districts: [
        {
            name: {
                type: String
            },
            code: {
                type: Number
            }
        }
    ] 
})
function toObjectId(id){
    return mongoose.Types.ObjectId(id)
}
const State =  mongoose.model('State', stateSchema,'state')
module.exports = {
    State,
    toObjectId
}