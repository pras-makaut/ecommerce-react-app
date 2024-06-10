import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {
    const {id} = useParams();
    const [productsDetail,setProductsDetail]  = useState();
    function fetchProductsDetail(){
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProductsDetail(json));
    }

    useEffect(()=>{
        fetchProductsDetail();
    },[id])
  return (
    <div className='flex flex-row justify-evenly p-5 w-full'>
        <div>
            <img src={productsDetail?.image} className='h-72' />
        </div>
        <div className='mx-5 w-[50%]'>
            <div className='text-4xl font-medium leading-normal tracking-wider '>
                {productsDetail?.title}
            </div>
            <div className='text-xl font-medium leading-normal tracking-wider my-5 '>
                {productsDetail?.price}
            </div>
            <div className='font-bold text-lg mb-3 text-[#999]'>
                Description
            </div>
            <div className='text-base leading-7 text-justify'>
                {productsDetail?.description}
            </div>

            <div className='bg-blue-500 w-48 p-3 rounded text-white text-center hover:bg-blue-700 mt-10' >
                Add to Cart
            </div>
            <div className='bg-yellow-500 w-48 p-3 rounded text-white text-center hover:bg-yellow-700 mt-6'>
                Go to Cart
            </div>

        </div>

    </div>
  )
}

export default ProductDetail