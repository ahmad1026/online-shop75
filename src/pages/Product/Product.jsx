import React from "react";
// import image from "../images/post1.jpg";
import {
  ProductWrapper,
  ProductInfo,
  ProductDetilse,
  AddtoCart,
} from "../../styles";
import parse from 'html-react-parser';
import { useEffect , useState } from "react";
import { getProducts } from "../../api/getProducts.api";
import { useParams } from "react-router-dom";
export default function Product() {
  const [product , setProduct] = useState({})

  const {productId} = useParams()

  useEffect(()=>{
    getProducts(`/${productId}`)
    .then(res=>{
      setProduct(res);
    }).catch(e=>{
      console.log(e);
    })

  },[productId])


  return (
    <ProductWrapper>
      <ProductInfo>
        {
          product.images?.length > 0 && <img width="350" src={`http://localhost:3001/files/${product.images[0]}`} alt={`${product.title}`} />
        }
        <ProductDetilse>
          <div>
            <h1>{product.title}</h1>
            <h2>{product.catName}</h2>
          </div>
          <div>
            <h1>{product.price} تومان</h1>
            <AddtoCart>
              <input type="number" />
              <button>افزودن به سبد خرید</button>
            </AddtoCart>
          </div>
        </ProductDetilse>
      </ProductInfo>
      <div>
         { product.discription ? parse(String(product.discription)) : null}
      </div>
    </ProductWrapper>
  );
}
