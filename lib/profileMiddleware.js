

import axios from 'axios'

export const profileEdit = (auth_token, first_name, last_name, phone_number) => {
    console.log("Reached Middleware")
    let data = {"token": auth_token, "FirstName": first_name, "LastName": last_name, "PhoneNumber": phone_number}
    try {
        let res = ""
        axios.post("/api/profile/editProfile", data).then((response) => res = response).catch((err) => console.log(err))
        return res
    }
    catch(error){
        console.log(error)
    }
}


export const getGarden = (token) => {
    try {
        const res = axios.post("/api/profile/garden", token).then((response) => res = response).catch((err) => console.log(err))
        return res
    }
    catch(error){
        console.log(error)
    }
}

export const addGarden = (garden) => {
    try {
        const res = axios.post("/api/profile/addGarden", garden)
        return res
    }
    catch(error){
        console.log(error)
    }
}
