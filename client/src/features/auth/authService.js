import axios from "axios"

const register = async (formData) => {

    const response = await axios.post(`/api/auth` , formData)
    localStorage.setItem('user' , JSON.stringify(response.data))
    return response.data

}

const authService = {register}

export default authService