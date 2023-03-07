import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { product, key } = props;

  return (
    <>
        <Card class="card bg-light shadow-lg border-0 mb-2" style={{width: "18rem", cursor: "pointer"}} key={key}>
            <Links to={`/ProductDetails/${product.id}`}>
                <img src={product.image} alt='' className="card-img-top" styled={{width: "100%", height: "370.66px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text offset-9">${product.id}.99</p>
                </div>
            </Links>
            
        </Card>
    </>
  )
}


const Links = styled(Link)`

    text-decoration: none;
    color: black;

`
const Card = styled.div`
    min-height: 25rem;
    margin: 1rem 1.5rem;
    position: relative;

    img {
        border-radius: 2rem;
        height: 80%;
        width: 100%;
        object-fit: cover;
    }

`

export default Product;