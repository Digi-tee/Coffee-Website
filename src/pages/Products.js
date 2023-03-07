import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Product from './Product'

const Products = () => {
    const [searchedProducts, setSearchedProducts] = useState([])

    const getSearchedProducts = async()=>{
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await response.json();
      setSearchedProducts(data);
    }

    useEffect(()=> {
        getSearchedProducts();
    }, []);

    return (
        <>
            <Navbar />
            <div className="row p-3 container mx-auto ms-6 mt-5 justify-content-center" >
                {
                    searchedProducts.map((product, index) => {
                        return (
                            <Product product={product} key={index}></Product>
                        )
                    })
                }
                
            </div>
            <Footer/>
        </>
    )
}





export default Products