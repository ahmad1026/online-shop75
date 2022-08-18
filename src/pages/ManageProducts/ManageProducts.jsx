import React, { useEffect, useState } from "react";
import {
  ProductsPage,
  ProductsTitle,
  TableProductsWrapper,
} from "../../styles";
import { Link, useParams } from "react-router-dom";
import { getProducts, deleteProduct } from "../../api/getProducts.api";
import { Pagination, AddEditProduct } from "../../components";
export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [pageVolum, setpageVolum] = useState([]);
  const [page , setPage] = useState(1);
  const [modal, setModal] = useState({
    status: false,
    EditId: "",
  });
  const params = useParams();
  useEffect(() => {
    getProducts("")
      .then((res) => {
        // console.log(res);
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
        setPage(url)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleEdit = (EditId) => {
    setModal({
      status: true,
      EditId,
    });
  };
  const handleDelete = (DeleteId) => {
    deleteProduct(DeleteId)
      .then((res) => {
        goToPage(page)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleModal=(state)=>{
    setModal({
      status:state
    })
    getProducts("")
      .then((res) => {
        setProducts(res);
        goToPage(`?_page=${page}&_limit=10`);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
    <>
      {modal.status && (
        <AddEditProduct EditId={modal.EditId} closeModal={handleModal} />
      )}
      <ProductsPage>
        <ProductsTitle>
          <h1>مدیریت کالا ها</h1>
          <button onClick={() => setModal({ status: true,EditId: "" })}>
            افزودن کالا
          </button>
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
                <tr key={item.id}>
                  <td>
                    <button>مشاهده</button>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.catName}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>ویرایش</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableProductsWrapper>
        <Pagination
          getUrl={goToPage}
          pages={new Array(Math.ceil(products.length / 10))}
        />
      </ProductsPage>
    </>
  );
}
