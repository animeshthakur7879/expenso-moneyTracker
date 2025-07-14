import axios from "axios"

const getAllIncomes = async(token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.get(`/api/income` , options)

    return response.data

}

//Add income
const addIncome = async(formData , token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.post(`/api/income` , formData ,options)

    return response.data
    // console.log(response.data)

}

//Add income
const updateIncome = async(formData , iid ,  token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.put(`/api/income/:${iid}` , formData ,options)

    // return response.data
    console.log(response.data)

}

const incomeService = {getAllIncomes , addIncome , updateIncome }

export default incomeService