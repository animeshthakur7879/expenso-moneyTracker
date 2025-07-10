import axios from "axios"

const getAllExpenses = async(token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.get(`/api/expense` , options)

    return response.data

}

//Add EXPENSE
const addExpense = async(formData , token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.post(`/api/expense` , formData ,options)

    return response.data
    // console.log(response.data)

}

const expenseService = {getAllExpenses , addExpense}

export default expenseService