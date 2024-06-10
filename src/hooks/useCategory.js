import React, { useEffect, useState } from 'react'

const useCategory = () => {
    const [allCategories,setAllCategories] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setAllCategories(json));
        }
        fetchData();
    },[]);
  return allCategories;
}

export default useCategory;