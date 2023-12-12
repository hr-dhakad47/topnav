import React, { useState,useEffect } from 'react'
import   {ProductCard}  from './ProductCard'  
// import ProductCard from './productCard';
// import { ProductCard } from './productCard';
import AddCard from './AddCard';
import axios from "axios"


const Product = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <div>
        {products.map((product,index)=>{
          return(
            <>
            <ProductCard product = {product}/>
            </>
          )
        }
        )}
      </div>
    </section>
  )
}

export default Product
