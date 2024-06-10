import React from 'react'
import { useNavigate } from 'react-router'

const ProductBox = ({product}) => {
    const navigate = useNavigate();
  return (
    <div 
        className='flex flex-col shadow-lg border justify-between w-[30%] m-2 p-2 hover:shadow-2xl cursor-pointer'
        onClick={()=> navigate(`/products/${product.id}`)}
    >
        <img src={product.image} className='h-[400px] mt-2' />
        <div className='flex flex-col-reverse p-5 basis-[70%] mt-20'>
            
            <div className='text-[#3b5875] text-center'>
                {product.price}
            </div>
            <div className='text-center'>
                {product.title}
            </div>
        </div>
    </div>
  )
}

export default ProductBox