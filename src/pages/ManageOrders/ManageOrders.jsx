import React, { useState, useEffect } from "react";
import { OrdersPage, OrdersPageHeader, TableOrdersWrapper } from "../../styles";
import { getOrders, getOrdersFilter } from "../../api/getOrders.api";
import {Pagination} from "../../components";
import { timestampTodate } from "../../utils/functions.utils";
export default function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [pageVolum, setpageVolum] = useState([]);

  useEffect(() => {
    getOrders("")
      .then((res) => {
        setOrders(res);
        goToPage("?_page=1&_limit=10");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleFilter = ({ target }) => {
    console.log(target.id);
    getOrdersFilter(target.id)
      .then((res) => {
        console.log(res);
        setOrders(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const goToPage = (url) => {
    getOrders(url)
      .then((res) => {
        setpageVolum(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <OrdersPage>
      <OrdersPageHeader>
        <h1>مدیریت سفارش ها</h1>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="">سفارش های تحویل شده</label>
            <input
              id="delivered"
              onChange={handleFilter}
              name="filter"
              type="radio"
            />
          </div>
          <div>
            <label htmlFor="">سفارش های در حال انتظار</label>
            <input
              id="pending"
              onChange={handleFilter}
              name="filter"
              type="radio"
            />
          </div>
        </div>
      </OrdersPageHeader>
      <TableOrdersWrapper>
        <table>
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>مجموع مبلغ</th>
              <th style={{ textAlign: "center" }}>زمان ثبت سفارش</th>
              <th>برسی وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {pageVolum.map((item) => (
              <tr>
                <td>{item.fullName}</td>
                <td>{item["total-price"]}</td>
                <td style={{ textAlign: "center" }}>
                  {timestampTodate(item.createdAt)}
                </td>
                <td>مشاهده </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableOrdersWrapper>
      <Pagination
        getUrl={goToPage}
        pages={new Array(Math.floor(orders.length / 10) + 1)}
      />
    </OrdersPage>
  );
}
