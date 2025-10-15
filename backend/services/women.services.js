import mongoose from "mongoose";
import user from "../models/women.model.js"

export const registerWomen = async ({
    name,email,password,phoneNumber,aadharNumber,smartSafetyDeviceId
})=>{
    if(!name || !email || !password || !phoneNumber || !aadharNumber || !smartSafetyDeviceId ){
        throw new Error("All fields are required");
    }

    const hashPassword = await user.hashPassword(password);
    const newUser = new user({
        name,
        email,
        password:hashPassword,
        phoneNumber,
        aadharNumber,
        smartSafetyDeviceId,
        
    });

    return newUser.save();
}

 