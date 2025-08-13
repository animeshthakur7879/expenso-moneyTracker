import axios from "axios"

const getallTransactions = async(token) => {

   let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await  axios.get(`${api}/finance` , options)

    return response.data

}

const financeService = {getallTransactions}

export default financeService