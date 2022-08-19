import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  CardStyle,
  ImageStyle,
  ProductContentStyle,
  DiscountLableStyle,
  CostProductStyle,
} from "../styles";
// import image1 from "../assets/images/post1.jpg";
export default function Card({product}) {
  return (
    <CardStyle>
      <Link to={`/product/${product.id}`}>
        <ImageStyle>
          <img src={`http://localhost:3001/files/${product.images[0]}`} width={"100%"} alt={`${product.title}`} />
        </ImageStyle>
      </Link>
      <ProductContentStyle>
        <h2>{product.title}</h2>
        <CostProductStyle>
          <span>قیمت :</span>
          <div>
          <h1>{Number(product.price) + Number((1/10)*product.price)} تومان</h1>
          <h2>{product.price} تومان</h2>
          </div>
          <FaHeart />
        </CostProductStyle>
      </ProductContentStyle>
      <DiscountLableStyle>10%</DiscountLableStyle>
    </CardStyle>
  );
}
