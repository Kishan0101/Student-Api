const mongooes = require('mongoose');
const studentSchema = new mongooes.Schema({
    _id:mongooes.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    gender:String
})

module.exports = mongooes.model('Student', studentSchema);