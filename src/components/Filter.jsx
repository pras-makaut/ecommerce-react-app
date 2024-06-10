import React, { useCallback } from 'react'
import useCategory from '../hooks/useCategory'
import { useNavigate } from 'react-router';

const Filter = () => {
    const allCategories = useCategory();
    const navigaet = useNavigate();
  return (
    <div className='flex flex-col'>
        <div className='font-bold text-lg mb-3'>Categories</div>
        {allCategories.map((category) => {
            return (
                <div className='h-10 bg-[#dff9fb] p-2 border-b border-[#95afc0] cursor-pointer' key={category} onClick={() => navigaet(`/products?category=${category}`)}>
                    {category}
                </div>
            )
        })}
    </div>
  )
}

export default Filter