import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainStyle, TagStyle } from "../../styles";
import { FaAngleLeft } from "react-icons/fa";
import Card from "../../components/ProductCard";
import { ProductsStyle } from "../../styles";
import { getCategores } from "../../api/getCategores.api";
import { getProducts } from "../../api/getProducts.api";
export default function MainStore() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });

  const [categores, setCategores] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategores()
      .then((res) => {
        setCategores(res);
        getProducts("").then((res) => {
          setProducts(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainStyle>
      {categores.map((category) => (
        <>
          <TagStyle>
            <Link to={`products/${category.title}/${category.id}`}>
              <span>{category.title}</span>
              <FaAngleLeft />
            </Link>
          </TagStyle>
          <ProductsStyle>
            {products.map((product) => {
              if (product.catId == category.id) {
                return <Card product={product} />;
              }
            })}
          </ProductsStyle>
        </>
      ))}
    </MainStyle>
  );
}
