import React, { useState } from "react";
import { TabbarWrapper, Tab } from "../styles";
import { NavLink } from "react-router-dom";
export default function AdminTabbar() {
  const [tab1, settab1] = useState(false);
  const [tab2, settab2] = useState(false);
  const [tab3, settab3] = useState(false);
  return (
    <TabbarWrapper>
      <NavLink to="products" className={({isActive})=> isActive ? settab1(true) : settab1(false)}>
        <Tab status={tab1}>کالاها</Tab>
      </NavLink>
      <NavLink to="quantity" className={({isActive})=> isActive ? settab2(true) : settab2(false)}>
        <Tab status={tab2}>موجودی وقیمت ها</Tab>
      </NavLink>
      <NavLink to="orders" className={({isActive})=> isActive ? settab3(true) : settab3(false)}>
        <Tab status={tab3}>سفارش ها</Tab>
      </NavLink>
    </TabbarWrapper>
  );
}
