import React,{ useEffect, useState } from "react";
import { json } from "react-router-dom";

export const ProductCard = (props) => {
  const { product } = props;
  let [addToCard, setAddToCard] = useState([])
  

 useEffect(() =>{
  if(addToCard.length !== 0){
    localStorage.setItem("addCardData",JSON.stringify(addToCard));
  }
  else{
    let updated = JSON.parse(localStorage.getItem("addCardData"));
    setAddToCard(updated || []);
  }
 },[addToCard]);

  return (
    
    <>
    <div className="card" style={{width: "18rem"}}>
  <img src={product.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>

    <p className="card-text" style={{color:"black"}}>Top Product.</p>
  </div>
  <div>
      <span style={{color:"black"}}>$ {product.price}</span>
 
  <button style={{color:"black"}}>
        Buy Now</button>
        
        <button style={{color:"black"}}
        onClick={()=>{
          addToCard.push(product);
          setAddToCard([...addToCard])
        }}>
          Add To Cart
        </button>
        </div>
 
</div>
</>
     );
    }
