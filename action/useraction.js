"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import connectDB from "../db/connectDb"

export const initiate = async (amount , to_username , paymentform )=>{

    await connectDB();
    var instance = new Razorpay ({key_id : process.env.KEY_ID , key_secret : process.env.KEY_SECRET})

   
    let options ={
        amount : Number.parseInt(amount) ,
        currency : "INR",
    }
    let x = await instance.orders.create(options)

    // payment object which shows the pending payment

    await Payment.create({ oid : x.oid , amount : amount , to_user: to_username , name :paymentform.name , message : paymentform.message })

    return x
}