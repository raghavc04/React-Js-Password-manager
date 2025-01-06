import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-center flex flex-col justify-center items-center text-white w-full bottom-0'>
            <div className="logo font-bold text-white text-2xl ">
                <span className='text-green-500'> &lt;</span>
                
                <span className='text-green-500 hover:font-bold'> Own Password Manager/&gt;</span>
            </div>
            <div className='flex justify-center items-center '>
                Created by Raghav
            </div>
        </div>
    )
}

export default Footer
