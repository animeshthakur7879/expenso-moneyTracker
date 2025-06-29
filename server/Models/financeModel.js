const {mongoose} = require("mongoose");

const financeSchema = new mongoose.Schema(
    { 
        user : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'User' ,
            required : true
        } ,
        totalIncome : {
            type : Number,
            default : 0
        } ,
        totalExpense : {
            type : Number,
            default : 0
        } ,
        balance : {
            type : Number,
            default : 0
        }
    } , 
    {
        timestamps : true
    }
)

module.exports = mongoose.model('Finance' , financeSchema)