import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductsPage,
  ProductsTitle,
  TableProductsWrapper,
} from "../../styles";
import { Link, useParams } from "react-router-dom";
import { getProducts, deleteProduct } from "../../api/getProducts.api";
import { Pagination, AddEditProduct } from "../../components";
import {
  getCategories,
  editProductApi,
  handleProductModal,
} from "../../features/products/productSlice";
export default function ManageProducts() {
  const dispatch = useDispatch();
  const productsStates = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  const [pageVolum, setpageVolum] = useState([]);
  const [page, setPage] = useState(1);
  //   const [modal, setModal] = useState({
  //     status: false,
  //     EditId: "",
  //   });
  const params = useParams();
  useEffect(() => {
    dispatch(getCategories());
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
        setPage(url);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleEdit = (EditId) => {
     dispatch(editProductApi(EditId));
  };
  const handleDelete = (DeleteId) => {
    deleteProduct(DeleteId)
      .then((res) => {
        goToPage(page);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //   const handleModal = (state) => {
  //     setModal({
  //       status: state,
  //     });
  //     getProducts("")
  //       .then((res) => {
  //         setProducts(res);
  //         goToPage(`?_page=${page}&_limit=10`);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  return (
    <>
      {productsStates.modalStatus && <AddEditProduct />}
      <ProductsPage>
        <ProductsTitle>
          <h1>مدیریت کالا ها</h1>
          <button onClick={() => dispatch(handleProductModal())}>
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
                  <td>
                    {
                        productsStates.categoreis.map(category => {
                            if(category.id == item.category){
                                return category.title
                            }
                        })
                    }
                  </td>
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
