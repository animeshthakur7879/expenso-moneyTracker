const expressAsyncHandler = require("express-async-handler")
const Expense = require("../Models/expenseModel")


const getAllExpenses = expressAsyncHandler(async(req , res) => {

    const expense = await Expense.find({user : req.user._id})
    if(!expense) {
        res.status(400)
        throw new Error ("No expenses found for the user")
    }

    res.status(200).json(expense)

})

const addExpense =  expressAsyncHandler(async(req , res) => {

    const {title , ammount} = req.body
    
    if(!title || !ammount) {
        res.status(400)
        throw new Error("Please fill all the details")
    }

    const expense = await Expense.create({
        user : req.user._id , title , ammount
    })

    if(!expense){
        res.status(400)
        throw new Error("Error in adding expense")
    }

    res.status(200).json(expense)

})


const updateExpense =  expressAsyncHandler(async(req , res) => {

    const {title , description} = req.body
    const expenseId = req.params.eid

    const expense = await Expense.findById(expenseId)

    if(!expense){
        res.status(400)
        throw new Error("Cannot find expense to update")
    }

    const updatedexpense = await Expense.findByIdAndUpdate(expenseId , req.body , {new : true})

    if(!updatedexpense){
        res.status(400)
        throw new Error("Error in updating expense")
    }

    res.status(200).json(updatedexpense)
    
})


const deleteExpense =expressAsyncHandler(async(req , res) => {

    const expenseId = req.params.eid

    const deletedexpense = await Expense.findByIdAndDelete(expenseId)

    if(!deletedexpense){
        res.status(400)
        throw new Error("Error in deleting expense")
    }

    res.status(200).json(deletedexpense)


}
)


module.exports = {getAllExpenses , addExpense , updateExpense , deleteExpense}