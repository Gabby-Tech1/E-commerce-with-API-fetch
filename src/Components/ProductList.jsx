import React from 'react'
import RemoveFromCartLink from './RemoveCart';


const ProductList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 p-3'>
            {products.map(item => {
                return (
                    <div key={item.id} className='border p-4 shadow-xl hover:scale-105 duration-500 ease-in-out'>
                        <img src={item.thumbnail} alt={item.name} title={item.title} className='w-full mb-2 object-cover h-60' />
                        <div className=' text-lg font-semibold'>{item.title}</div>
                        <div className='text-gray-500'>{item.description}</div>
                        <div className='text-gray-500 pt-2 text-2xl font-extrabold'>${item.price}</div>
                        <RemoveFromCartLink cartsCount={item.cartsCount} onRemoveFromCart={() => onRemoveFromCart(item)} />
                        <button className='right-3 mt-7 rounded-full bg-yellow-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold' onClick={onAddToCart}>Add to Cart</button>
                    </div>
                )
            })}
    </div>
  )
}


export default ProductList