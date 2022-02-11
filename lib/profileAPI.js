

import axios from 'axios'

export const profileEdit = (auth_token, first_name, last_name, phone_number) => {
    let data = {"token": auth_token, "FirstName": first_name, "LastName": last_name, "PhoneNumber": phone_number}
    try {
        const res = axios.post("/api/profile", data)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}
