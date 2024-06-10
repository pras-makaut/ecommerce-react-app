import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductBox from '../../components/ProductBox';
import Filter from '../../components/Filter';

const ProductList = () => {
    const [query] = useSearchParams();
    console.log("category",query.get("category"));
    const [products,setProducts]  = useState([]);
    const cagtegoryToBeFetched = query.get("category");
    function fetchProducts(){
        fetch((cagtegoryToBeFetched === "All Products") ?'https://fakestoreapi.com/products/' : `https://fakestoreapi.com/products/category/${query.get("category")}`)
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }

    useEffect(()=>{
        fetchProducts();
    },[query.get("category")])
  return (
    <div>
        <div className='text-4xl p-2 text-center'>
            All Products
        </div>
        <div className='flex flex-wrap justify-around'>
            <Filter />

            <div className='flex flex-wrap basis-[80%]'>
                {
                    products && products.map(
                        (product) => <ProductBox product={product}/>
                    ) 
                }
            </div>
        </div>
    </div>
    
  )
}

export default ProductList;