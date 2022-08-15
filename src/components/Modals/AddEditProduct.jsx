import React, { useEffect, useState } from "react";
import { ModalWrapper, FormContent } from "../../styles";
import { getProducts } from "../../api/getProducts.api";
import { FaWindowClose } from "react-icons/fa";
import { Row, Column } from "../../styles/Global";
import EditorConvertToHTML from '../DraftEditor'
export function AddEditProduct({ closeModal, EditId }) {
  const [product, setProduct] = useState({});

  console.log(EditId);

  useEffect(() => { 
    getProducts(`/${EditId}`).then((res) => {
      // console.log(res);
      setProduct(res);
    });
  }, []);

  return (
    <ModalWrapper>
      <FormContent>
        <Column gap="20px">
          <Row alignItems="center" justifyContent="space-between">
            <h1>ویرایش کالا</h1>
            <FaWindowClose onClick={() => closeModal(false)} />
          </Row>
          <Column gap="10px">
            <label htmlFor="image">تصویر کالا</label>
            <input type="file" />
            <label htmlFor="name">نام کالا</label>
            <input type="text" />
            <label htmlFor="category">دسته بندی کالا</label>
            <select>
              <option value="l"></option>
              <option value="l"></option>
              <option value="l"></option>
              <option value="l"></option>
            </select>
            <label htmlFor="description">توضیحات</label>
            

            <EditorConvertToHTML/>
            
          </Column>
        </Column>
      </FormContent>
    </ModalWrapper>
  );
}
