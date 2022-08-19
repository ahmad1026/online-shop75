import React from "react";
import { useParams } from "react-router-dom";
import { ProductsStyle, ProductGroup, TagStyle } from "../../styles";
import { FaAngleLeft } from "react-icons/fa";
import Card from "../../components/ProductCard";
import SidbarContainer from "../../components/Sidbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/getProducts.api";
export default function MainStore() {
  const [products, setProducts] = useState([]);
  const { category, categoryId } = useParams();
  useEffect(() => {
    getProducts("")
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
  return (
    <ProductGroup>
      <SidbarContainer catId={categoryId} />
      <div>
        <TagStyle>
          <span>{category}</span>
          <FaAngleLeft />
        </TagStyle>
        <ProductsStyle>
          {products.map((product) => {
            if (product.catId == categoryId) {
              return <Card product={product}/>
            }
          })}
        </ProductsStyle>
      </div>
    </ProductGroup>
  );
}
