import React, { useEffect, useState } from 'react'
import Category from '../../components/Category';
import useCategory from '../../hooks/useCategory';

const Home = () => {
    const allCategories = useCategory();
    console.log("all",allCategories);
    return (
        <div className='p-5'>
            <div className='font-bold text-5xl p-2 tracking-widest flex flex-col items-center my-4'>
                Welcome to shop cart
            </div>
            <div className='flex justify-around p-2 text-white'>
                <div className='w-36'>
                    <Category name={"All Products"}/>
                </div>
                
                {allCategories.map((category) => {
                    return (
                        <div className='w-36'>
                            <Category key={category} name={category} />
                        </div> )
                })}
            </div>

            <div className='font-medium text-xl p-2 tracking-widest flex flex-col items-center my-5'>
                Select a category to start shopping
            </div>
            
            
        </div>
    )
}

export default Home;