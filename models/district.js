const { mongoose } = require('../helpers/db')
const Schema =  mongoose.Schema;

const districtSchema =  new Schema({
    districtCode: {
        type: Number,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    subDistricts: [
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
const Districts =  mongoose.model('district', districtSchema,'district')
module.exports = {
    Districts,
    toObjectId
}