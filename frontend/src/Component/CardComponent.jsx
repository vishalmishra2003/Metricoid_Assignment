import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CardComponent = () => {
    const [bill, setBill] = useState()
    useEffect(() => {
        axios.get("http://localhost:5000/bills")
            .then((res) => {
                console.log(res)
                setBill(res.data)
            })
            .catch((err) => {
                console.error("Error Fetching Bill")
            })
    }, [])

    return (
        <div className='flex items-center justify-center bg-[#041a3d]'>
            <div className="border border-pink-600 rounded p-6 m-8 w-100 text-center text-white relative">
                <span className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-xs-font-semibold rounded-full px-3 py-1'>MOST POPULAR</span>
                <h2 className='text-4xl font-bold mb-2'>${bill[0].amt} <span className='text-lg'>/mo</span></h2>
                <p className='text-gray-400 text-sm mb-4'>Billed Annually (Save 20%)</p>
                <ul className='text-left space-y-2 mb-4'>
                    <li className='flex items-center gap-2'><span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white text-xs'>&#10003;</span> Include features #1</li>
                    <li className='flex items-center gap-2'><span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white text-xs'>&#10003;</span> Include features #2</li>
                    <li className='flex items-center gap-2'><span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white text-xs'>&#10003;</span> Include features #3</li>
                </ul>
                <p className='text-gray-400 uppercase text-xs-font-bold mb-2 text-left'>Coming Soon</p>
                <p className='text-gray-400 text-sm mb-6'>Custom placeholder text.</p>
                <button className='bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded font-semibold transition'>Signup Now</button>
                <p className='text-gray-400 text-xs mt-4'>You'll be charged $48 + Tax <br />14-Day Moneyback Guarantee</p>
            </div>
        </div>
    )
}
