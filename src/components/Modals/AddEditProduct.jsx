import React, { useEffect, useState } from "react";
import { ModalWrapper, FormContent } from "../../styles";
import { getProducts, editProduct } from "../../api/getProducts.api";
import { FaWindowClose } from "react-icons/fa";
import { Row, Column } from "../../styles/Global";
import EditorConvertToHTML from "../DraftEditor";
import { getCategores } from "../../api/getCategores.api";
import { uploadImage } from "../../api/uploadImage";
import { addProductApi } from "../../api/addProduct";
export function AddEditProduct({ closeModal, EditId }) {
  const [product, setProduct] = useState({});
  const [categores, setCategores] = useState([]);
  const [description , setDescription] = useState("");

  // console.log(EditId);

  useEffect(() => {
    getProducts(`/${EditId}`)
      .then((res) => {
        setProduct(res)
        getDescription(res.discription)
      })
      .catch((e) => {
        console.log(e);
      });
    getCategores()
      .then((res) => {
        setCategores(res);
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setProduct({
          ...product,
          title: e.target.value,
        });
        break;
      case "category":
        setProduct({
          ...product,
          catId: e.target.value.split("/")[0],
          catName: e.target.value.split("/")[1],
        });
        // console.log(product);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = {};
    const imageProduct = new FormData();
    const formData = new FormData(e.target);
    form = Object.fromEntries(formData);
    imageProduct.append("image", e.target.images.files[0]);
    form.discription = description;
    form = {...form , price:Number(form.price),count:Number(form.count)}
    console.log(form);


    // const validateData = await addProductVAlidationSchema
    // .validate(form)
    // .catch((err)=>{
    //     err.message.type === 'title'
    // })
    // if (EditId === "") {
    //   uploadImage(imageProduct)
    //     .then((res) => {
    //       if (!!res.filename) {
    //         form.images = [res.filename];
    //       } else {
    //         form.images = [];
    //       }
    //       form.catName = e.target.category.value.split("/")[1];
    //       form.catId = e.target.category.value.split("/")[0];
    //       form.discription = description;
    //       // console.log(form);
    //       addProductApi(form)
    //         .then((res) => {
    //           // console.log(res);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // } else {
    //   uploadImage(imageProduct)
    //     .then((res) => {
    //       if (!!res.filename) {
    //         form.images = [...product.images, res.filename];
    //       } else {
    //         form.images = [...product.images];
    //       }
    //       form.catName = e.target.category.value.split("/")[1];
    //       form.catId = e.target.category.value.split("/")[0];
    //       form.discription = description;
    //       // console.log(form);
    //       editProduct(product.id, form)
    //         .then((res) => {
    //           // console.log(res);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    closeModal(false);
  };

  const getDescription = (text) => {
    setDescription(text)
  };
  
  return (
    <ModalWrapper>
      <form action="" onSubmit={handleSubmit}>
        <FormContent>
          <Column gap="20px">
            <Row alignItems="center" justifyContent="space-between">
              {EditId !== "" ? <h1>ویرایش کالا</h1> : <h1>اضافه کردن کالا</h1>}
              <FaWindowClose onClick={() => closeModal(false)} />
            </Row>
            <Column gap="10px">
              <label htmlFor="image">تصویر کالا</label>
              <input name="images" onChange={handleChange} type="file" />
              <label htmlFor="name">نام کالا</label>
              <input
                name="title"
                onChange={handleChange}
                type="text"
                value={product.title}
              />
              <label htmlFor="category">دسته بندی کالا</label>
              <select name="category" onChange={handleChange}>
                {categores.map((category) => (
                  <option
                    selected={category.id == product.catId ? true : false}
                    value={`${category.id}/${category.title}`}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
              <Row justifyContent="center" gap="10px">
                <input
                  onChange={handleChange}
                  name="count"
                  type="number"
                  value={product.count}
                  placeholder="تعداد"
                />
                <input
                  onChange={handleChange}
                  name="price"
                  type="number"
                  value={product.price}
                  placeholder="قیمت هر واحد"
                />
              </Row>
              <label htmlFor="description">توضیحات</label>
              <EditorConvertToHTML editContext={description ? description : "" } getDescription={getDescription} />
              <button type="submit">ذخیره</button>
            </Column>
          </Column>
        </FormContent>
      </form>
    </ModalWrapper>
  );
}
