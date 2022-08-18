import React, { useEffect, useState } from "react";

import { getProducts, editProduct } from "../../api/getProducts.api";
import { Pagination } from "../../components";
import {
  QuantityPage,
  QuantityPageHeader,
  TableQuantityWrapper,
  SaveButton,
} from "../../styles";
export default function QuantityProducts() {
  const [save, setSave] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageVolum, setpageVolum] = useState([]);
  const [wasEdite, setwasEdite] = useState([]);
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

  const AddEditable = ({ target }, id) => {
    target.setAttribute("contenteditable", true);
    // const result = wasEdite.includes(id , 0)
    // if(!result)setwasEdite([...wasEdite,id])
    setSave(true);
    // console.log(Number(target.textContent));
  };

  const handleOnBlure = ({ target }, id, key) => {
    console.log(id, key, target.textContent);
    let beforEdit = false;

    if (wasEdite.length > 0) {
      wasEdite.map((item) => {
        if (item.id === id) {
          beforEdit = true;
          item[key] = target.textContent;
        }
      });
      if (!beforEdit) {
        products.map((product) => {
          if (product.id === id) {
            product[key] = target.textContent;
            setwasEdite([...wasEdite, product]);
          }
        });
      }else{
        beforEdit = false
      }
    } else {
      products.map((product) => {
        if (product.id === id) {
          product[key] = target.textContent;
          setwasEdite([...wasEdite, product]);
        }
      });
    }
    console.log(wasEdite);
  };
  const handleSave = () => {
    if (wasEdite.length > 0) {
      setSave(false);
      for (let i = 0; i < wasEdite.length; i++) {
        editProduct(wasEdite[i].id, wasEdite[i]).then((res) => {
          console.log(res);
        });
        // console.log(res);
      }
    }
  };
  return (
    <QuantityPage>
      <QuantityPageHeader>
        <h1>موجودی و قیمت ها</h1>
        <SaveButton onClick={handleSave} status={save}>
          ذخیره
        </SaveButton>
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
              <tr>
                <td>{item.title}</td>
                <td
                  onBlur={(e) => handleOnBlure(e, item.id, "price")}
                  onClick={(e) => AddEditable(e, item.id)}
                >
                  {item.price}
                </td>
                <td
                  onBlur={(e) => handleOnBlure(e, item.id, "count")}
                  onClick={(e) => AddEditable(e, item.id)}
                >
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableQuantityWrapper>
      <Pagination
        getUrl={goToPage}
        pages={new Array(Math.ceil(products.length / 10))}
      />
    </QuantityPage>
  );
}
