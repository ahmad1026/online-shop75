import React, { useEffect, useState } from "react";

import { getProducts } from "../../api/getProducts.api";
import Pagination from "../../components/Pagination";
import {
  QuantityPage,
  QuantityPageHeader,
  TableQuantityWrapper,
} from "../../styles";
export default function QuantityProducts() {
  const [products, setProducts] = useState([]);
  const [pageVolum , setpageVolum] = useState([]);
  useEffect(() => {
    getProducts('')
      .then((res) => {
        setProducts(res);
        goToPage('?_page=1&_limit=10')
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
 const goToPage = (url)=>{
    getProducts(url)
      .then((res) => {
        setpageVolum(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const AddEditable = ({target})=>{
 target.setAttribute('contenteditable',true);
  }


  const handleOnBlure = ()=>{

    console.log("ann");
  }
  return (
    <QuantityPage>
      <QuantityPageHeader>
        <h1>موجودی و قیمت ها</h1>
        <button>ذخیره</button>
      </QuantityPageHeader>
      <TableQuantityWrapper>
        <table>
          <thead>
            <tr>
              <th>نام کالا </th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {pageVolum.map((item) => (
              <tr >
                <td>{item.title}</td>
                <td onBlur={handleOnBlure} onClick={(e)=>AddEditable(e)}>{item.price}</td>
                <td onClick={(e)=>AddEditable(e)}>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableQuantityWrapper>
      <Pagination getUrl={goToPage} pages={new Array(Math.floor((products.length)/10) + 1)}/>
    </QuantityPage>
  );
}
