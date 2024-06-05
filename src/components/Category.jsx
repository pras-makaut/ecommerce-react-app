import React from 'react'
import {  useNavigate } from 'react-router'

const Category = ({name}) => {
    const navigaet = useNavigate();
  return (
    <div 
        className='p-5 bg-[#3b5875] rounded-lg border border-[#2c3e50] shadow-lg h-24 text-center align-middle'
        onClick={() => navigaet(`/products?category=${name}`)}
    >
        {name}
    </div>
  )
}

export default Category