import React from "react"
import styled from "styled-components";
import Products from "../Products";

const ProductItemWrapper= styled.div `
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props)=> props.theme.mainColor};
  letter-spacing: 5px;
  line-height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  display: inline-block;
`;

const ProductItemImage= styled.img `
  width: 150px;
  height: 150px;
  margin: 20px;
  border-style: double;
  border-radius: 50px;
`;

const ProductItem = (props) => {
    // const product=props.product;
    return(
    
    <ProductItemWrapper>
      <ProductItemImage
        alt={props.product.name}
        src={props.product.image}
      />
      <p>{props.product.name}</p>
      <p >{props.product.price} </p>
    </ProductItemWrapper>
    );
};

  export default ProductItem;