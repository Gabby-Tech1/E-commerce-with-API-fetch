import React from 'react'

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div>
        <select onChange={(e)=> onSelectCategory(e.target.value)} className='p-2 border mt-20 ml-16'>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>)
            )}
            
        </select>
    </div>
  )
}


export default CategoryFilter