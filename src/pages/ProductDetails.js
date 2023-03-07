import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ProductDetails = () => {
  
  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(0)

  const params = useParams();

  const getProduct = async(id)=>{
    const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
    const data = await response.json();
    setProductDetails(data);
    console.log(data)
  }
  
  const handleIncrease = ()=> {
    setQuantity((prev)=> prev + 1)
  }

  const handleDecrease = ()=> {
    setQuantity((prev)=> prev <= 0 ? 0 : prev - 1)
  }
  
  useEffect(()=> {
    getProduct(params.id);
  }, [params])

  const {id, image, title, description} = productDetails;

  return (
    <div>
      <Navbar />
        <div className="m-5 mb-5 d-flex justify-content-between ">
          <div className='d-flex flex-column col-12 col-md-6'>
            <div className='text-center'>
              <ImgContainer src={image} alt='product' id={id} className='text-bg-light' />
            </div>
            <div className='fs-5 text-justify mt-3' style={{ width: "400px", margin: "0 auto"}}>
              <h5>{description} </h5>
              <div className='d-flex justify-content-center'>
                <h6> <span style={{color: "#7B3F00"}}>FREE SHIPPING</span> </h6>
              </div>
            </div>
          </div>


          
          <div className='right flex-grow-1 text-black m-3 col-12 col-md-6'>
            <div>
              <p className='firstchild'>Official store</p>
            </div>
            <h2>{title}</h2>
            <div className='d-flex justify-content-between align-items-center mb-5'>
              <div>
                <h4>${Math.round(quantity *  2.99, 3)}</h4>
                <div>
                  <p>Quantity</p>
                  <div className='flex border mb-5 fs-6 px-0 text-center'>
                    <span onClick={handleIncrease} className="quantity cursor-pointer mx-3">+</span><span>{quantity}</span><span onClick={handleDecrease}  className="quantity cursor-pointer mx-3">-</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="button" className='cart-btn px-5 '><a className='cart-button text-decoration-none' href='/Cart'>Buy Now  </a></button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

const ImgContainer = styled.img`
  border-radius: 2rem;
  height: 400px;
  width: 400px;
  object-fit: cover;
`

export default ProductDetails;