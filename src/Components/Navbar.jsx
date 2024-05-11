import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({ cartsCount, onSearch }) => {
  return (
    <nav className='fixed w-full bg-yellow-400 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
            <h1 className='font-bold md:text-3xl text-2xl text-white pl-4 md:pl-8'>Ideation Axis</h1>
        </div>
        <div className='flex items-center gap-4'>
            <input 
                type='text' 
                placeholder='search...' 
                onChange={(e)=> onSearch(e.target.value)}
                className='px-3 py-1 rounded-xl border-gray-400 focus:outline-none'
            />
            <div className='flex items-center relative cursor-pointer'>
                <div className='text-white mr-4'>
                    <FaShoppingCart className='text-4xl'/>
                </div>
                <span className='absolute -top-2 left-5 pl-1 text-xl font-bold text-white rounded-full h-5 w-5 flex items-center bg-red-600'>
                    {cartsCount}
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar