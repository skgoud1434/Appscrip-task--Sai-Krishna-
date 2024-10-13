import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CardWrapper/CardContainer.css";
import ProductCard from "../ProductCard/ProductCard";
export default function CardContainer() {
  const [data, setData] = useState([]);

  async function getDataFromApi() {
    try{
      const res = await axios.get(`https://fakestoreapi.com/products`);
      console.log(res.data);
      setData(res.data);
    }
    catch(err){
      console.log(err);
      
    }
    
   
  }

  useEffect(() => getDataFromApi(), []);

  return (
    <div className="container">
      {data.map((ele) => (
        <ProductCard props={ele} />
      ))}
    </div>
  );
}
