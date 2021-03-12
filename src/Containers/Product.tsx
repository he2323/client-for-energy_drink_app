import React from "react";
import { useParams } from "react-router-dom";
interface Params{
    product_name: string
}
const Product = () => {
  let { product_name }:Params = useParams();
  return <div>{product_name} is awesome</div>;
};

export default Product;
