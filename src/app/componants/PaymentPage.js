"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '../../../action/useraction'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    const { data : session } = useSession()
    const [ paymentform, setpaymentform] = useState({})
    const handelChange = (e)=>{
        setpaymentform({...paymentform , [e.target.name]: [e.target.value]})
    }
    const pay = async (amount) => {
        let a = await initiate(amount , username, paymentform )
        console.log(paymentform.username)
        let orderId = a.id
        var options = {
            "key": process.env.KEY_SECRET, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);

        rzp1.open();

    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover relative w-full bg-red-50'>
                <img className='object-cover w-full h-96' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1725408000&token-hash=BqzPCp2EWfhAS7ZzpdMhbBkybKIr15gVrTCHUApe1P4%3D" alt="" />
                <div className='absolute -bottom-16 w-32 right-[35%] md:right-[45%]'>
                    <img className='rounded-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1725840000&token-hash=RGa6IQTa9kLiovRI6CVQ0EBNvK05jAABRwEslJygCf0%3D" alt="" />
                </div>

            </div>
            <div className="info flex justify-center items-center mt-20 flex-col">
                <div>
                    @{username} tilak mahajan

                </div>
                <div>
                    Lorem ipsum dolor
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur
                </div>

            </div>
            <div>
                <div className="payment flex flex-col w-[80%] mx-auto h-[50%] gap-2 md:gap-2 mt-10 md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-800 text-white rounded-lg p-5 ">
                        <h2 className='font-bold text-center text-2xl '>Supporters</h2>
                        <ul className='text-lg mt-5'>
                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Tilak Donated <span className='font-bold'>$30</span> With Massage  </li>
                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Vinay Donated <span className='font-bold'>$30</span> With Massage  </li>
                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Sonu Donated <span className='font-bold'>$30</span> With Massage  </li>
                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Dilip Donated <span className='font-bold'>$30</span> With Massage  </li>
                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Bhushan Donated <span className='font-bold'>$30</span> With Massage  </li>

                            <li className='my-2 flex gap-2'>
                                <img width={33} src="user.png" alt="user png" />
                                Manan Donated <span className='font-bold'>$30</span> With Massage  </li>


                        </ul>
                    </div>
                    <div className="makepayment w-full md:w-1/2 bg-slate-800 text-white rounded-lg p-5 gap-5 ">
                        <div>
                            <h2 className='font-bold text-center text-2xl'>Make payment </h2></div>
                        <div className="flex gap-5 mt-5 flex-col">
                            <input onChange={handelChange} value={paymentform.name}  type="text" className='bg-slate-700 border p-3 rounded-lg w-full' placeholder='Enter Name' name="name" id="" />
                            <input onChange={handelChange} value={paymentform.message} type="text" className='bg-slate-700 border p-3 rounded-lg w-full' placeholder='Enter Message' name="message" id="" />
                            <input onChange={handelChange} value={paymentform.amount} type="text" className='bg-slate-700 border p-3 rounded-lg w-full' placeholder='Enter a amount' name="amount" id="" />
                            <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Now</button>
                        </div>
                        <div className='mt-5 gap-2 flex flex-col md:flex-row'>
                            <button  className='bg-slate-700 border p-3 rounded-lg' onClick={()=>pay(1000)} >₹10</button>
                            <button  className='bg-slate-700 border p-3 rounded-lg' onClick={()=>pay(2000)} >₹20</button>
                            <button  className='bg-slate-700 border p-3 rounded-lg' onClick={()=>pay(2500)} >₹25</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
