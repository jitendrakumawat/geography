const { mongoose } = require('../helpers/db')
const Schema =  mongoose.Schema;

const parliamentaryconstituencySchema =  new Schema({
    stateCode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    constituencyDetails: [
        {
            name: {
                type: String
            },
            no: {
                type: Number
            },
            reservedCategory: {
                type: String
            },
        }
    ] 
})
function toObjectId(id){
    return mongoose.Types.ObjectId(id)
}
const Parliamentaryconstituency =  mongoose.model('parliamentaryconstituency', parliamentaryconstituencySchema,'parliamentaryconstituency')
module.exports = {
    Parliamentaryconstituency,
    toObjectId
}