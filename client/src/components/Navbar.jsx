import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white  '>
      <div className="mycontainer flex justify-between items-center px-4 h-12 py-5">

      <div className="logo font-bold text-white text-2xl ">
        <span className='text-green-700'> &lt;</span>
        
        <span className='text-green-700 hover:font-bold'>Passwords/&gt;</span>
        </div>
         <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center'>
          <img className='invert w-10 ' src="icons/github.svg" alt="github" />
          <span className='font-bold px-2'>GitHub</span>
         </button>
      </div>
    </nav>
  )
}

export default Navbar
