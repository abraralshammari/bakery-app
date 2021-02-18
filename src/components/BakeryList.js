import React from "react"
import ProductItem from "./ProductItem";
import Products from "../Products";


const BakeryList = () => {
    return Products.map((value) =>(
        <ProductItem product={value} key={value.id} />

    ));
    
};
export default BakeryList;