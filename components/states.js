import {atom, selector } from "recoil"



const tokenState = atom({
    key: "user",
    default: ''
})


export {tokenState}