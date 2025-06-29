const {mongoose} = require("mongoose")

const expenseSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId ,
            require : true
        } ,
        title : {
            type : String ,
            require : true
        } ,
        ammount : {
            type : Number ,
            require : true
        }
        
    } ,
    {
        timestamps : true
    }
)

module.exports = mongoose.model('Expense' , expenseSchema)