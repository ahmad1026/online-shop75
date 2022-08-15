import React, { useEffect, useState } from "react";
import {
  ProductsPage,
  ProductsTitle,
  TableProductsWrapper,
} from "../../styles";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../api/getProducts.api";
import { Pagination, AddEditProduct } from "../../components";
export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [pageVolum, setpageVolum] = useState([]);
  const [modal, setModal] = useState({
    status:false,
    EditId:''
  });
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getProducts("")
      .then((res) => {
        setProducts(res);
        goToPage("?_page=1&_limit=10");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const goToPage = (url) => {
    getProducts(url)
      .then((res) => {
        setpageVolum(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleEdit = (EditId)=>{
    setModal({
      status:true,
      EditId
    });


  }

  return (
    <>
      {modal.status && <AddEditProduct EditId={modal.EditId} closeModal={setModal} />}
      <ProductsPage>
        <ProductsTitle>
          <h1>مدیریت کالا ها</h1>
          <button onClick={() => setModal({status:true})}>افزودن کالا</button>
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
                  <td>
                    <Link to={`${item.id}`}>مشاهده</Link>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.catName}</td>
                  <td>
                    <button onClick={()=>handleEdit(item.id)}>ویرایش</button>
                  </td>
                  <td>
                    <Link to={`${item.id}`}>حذف</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableProductsWrapper>
        <Pagination
          getUrl={goToPage}
          pages={new Array(Math.floor(products.length / 10) + 1)}
        />
      </ProductsPage>
    </>
  );
}
