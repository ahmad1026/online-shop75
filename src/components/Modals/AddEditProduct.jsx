import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  getCategories,
  handleProductErrors,
  handleProductModal,
} from "../../features/products/productSlice";
import { ModalWrapper, FormContent } from "../../styles";
import { getProducts, editProduct } from "../../api/getProducts.api";
import { FaWindowClose } from "react-icons/fa";
import { Row, Column } from "../../styles/Global";
import EditorConvertToHTML from "../DraftEditor";
// import { getCategores } from "../../api/getCategores.api";
import { productValidation } from "../../validations/productValidation";
import { uploadImage } from "../../api/uploadImage";
export function AddEditProduct() {
  const productStates = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getCategories());
    if(productStates.editeStatus){
        setProduct(productStates.product)
    }

  }, []);

  //   useEffect(() => {
  //     getProducts(`/${EditId}`)
  //       .then((res) => {
  //         setProduct(res);
  //         getDescription(res.discription);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //     getCategores()
  //       .then((res) => {
  //         setCategores(res);
  //         // console.log(res);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setProduct({
          ...product,
          title: e.target.value,
        });
        break;
      case "count":
        setProduct({
          ...product,
          count: e.target.value,
        });
        break;
      case "price":
        setProduct({
          ...product,
          price: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = {};
    const imageProduct = new FormData();
    const formData = new FormData(e.target);
    form = Object.fromEntries(formData);
    imageProduct.append("image", e.target.images.files[0]);
    form.discription = description;
    const { formValid, errors } = await productValidation(form);
    if (!formValid) {
      dispatch(handleProductErrors(errors));
    } else {
      //submite form
      uploadImage(imageProduct)
        .then((res) => {
          if (!!res.filename) {
            form.images = [res.filename];
          } else {
            form.images = [];
          }
          form.discription = description;
          dispatch(addProduct(form));
          dispatch(handleProductErrors(null));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const getDescription = (text) => {
    console.log(text);
    setDescription(text);
  };

  return (
    <ModalWrapper>
      <form action="" onSubmit={handleSubmit}>
        <FormContent>
          <Column gap="20px">
            <span>
              {productStates.addProductStatus === "error"
                ? " خطا در ذخیره محصول "
                : ""}
            </span>
            <Row alignItems="center" justifyContent="space-between">
              {productStates.editeStatus ? (
                <h1>ویرایش کالا</h1>
              ) : (
                <h1>اضافه کردن کالا</h1>
              )}
              <FaWindowClose onClick={() => dispatch(handleProductModal())} />
            </Row>
            <Column gap="10px">
              <label htmlFor="image">تصویر کالا</label>
              <input name="images" onChange={handleChange} type="file" />
              <span>
                {productStates.errors?.images
                  ? productStates.errors.images
                  : ""}
              </span>
              <label htmlFor="name">نام کالا</label>
              <input
                name="title"
                onChange={handleChange}
                type="text"
                value={product.title}
              />
              <span>
                {productStates.errors?.title ? productStates.errors.title : ""}
              </span>
              <label htmlFor="category">دسته بندی کالا</label>
              <select name="category" onChange={handleChange}>
                {productStates.categoreis?.map((category) => (
                  <option
                    selected={category.id == product.category ? true : false}
                    value={category.id}
                    key={category.id}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
              <Row justifyContent="center" gap="10px">
                <Column gap={"10px"}>
                  <input
                    onChange={handleChange}
                    name="count"
                    type="number"
                    value={product.count}
                    placeholder="تعداد"
                  />
                  <span>
                    {productStates.errors?.count
                      ? productStates.errors.count
                      : ""}
                  </span>
                </Column>
                <Column gap={"10px"}>
                  <input
                    onChange={handleChange}
                    name="price"
                    type="number"
                    value={product.price}
                    placeholder="قیمت هر واحد"
                  />
                  <span>
                    {productStates.errors?.price
                      ? productStates.errors.price
                      : ""}
                  </span>
                </Column>
              </Row>
              <label htmlFor="description">توضیحات</label>
              <EditorConvertToHTML
                editContext={description ? description : ""}
                getDescription={getDescription}
              />
              <button type="submit">
                {productStates.addProductStatus === "pending"
                  ? "درحال انجام..."
                  : "ذخیره"}
              </button>
            </Column>
          </Column>
        </FormContent>
      </form>
    </ModalWrapper>
  );
}
