import React, { useEffect, useState } from "react";
import {
  ProductsPage,
  ProductsTitle,
  TableProductsWrapper,
} from "../../styles";
import {Link} from 'react-router-dom'
import { getProducts } from "../../api/getProducts.api";
import Pagination from "../../components/Pagination";
export default function ManageProducts() {
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

  return (
    <ProductsPage>
      <ProductsTitle>
        <h1>مدیریت کالا ها</h1>
        <button>افزودن کالا</button>
      </ProductsTitle>
      <TableProductsWrapper>
        <table>
          <thead>
            <tr>
              <th>تصاویر</th>
              <th>نام کالا </th>
              <th>دسته بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {pageVolum.map((item) => (
              <tr>
                <td><Link to={`${item.id}`}>مشاهده</Link></td>
                <td>{item.title}</td>
                <td>{item.catName}</td>
                <td>
                  <Link to="an">ویرایش</Link>
                </td>
                <td>
                  <Link to="an">حذف</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableProductsWrapper>
      <Pagination getUrl={goToPage} pages={new Array(Math.floor((products.length)/10) + 1)}/>
    </ProductsPage>
  );
}
