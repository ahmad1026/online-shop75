import React from "react";
// import image from "../images/post1.jpg";
import {
  ProductWrapper,
  ProductInfo,
  ProductDetilse,
  AddtoCart,
} from "../../styles";
import { useEffect , useState } from "react";
import { getProducts } from "../../api/getProducts.api";
import { useParams } from "react-router-dom";
export default function Product() {
  const [product , setProduct] = useState({})

  const {productId} = useParams()

  useEffect(()=>{
    getProducts(`/${productId}`)
    .then(res=>{
      console.log(res);
      setProduct(res);

    }).catch(e=>{
      console.log(e);
    })

  },[])


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
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری
      </p>
    </ProductWrapper>
  );
}
