import React from "react";
import { FaStore, FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeaderStyles, LogoStyle, CustomerTab, NumberCart } from "../styles";
import SearchBox from "../components/SearchBox";
import { Toogle } from "../components/ToogleTheme";
export default function CustomerHeader({ theme , toogleTheme }) {
  return (
      <HeaderStyles>
        <LogoStyle>
          <FaStore />
          <h3> فروشگاه دیجیتال </h3>
        </LogoStyle>
        <SearchBox color="red" />
        <CustomerTab>
          <Link to="/">
            <FaHome />
          </Link>
          <Toogle theme={theme} toggleTheme={toogleTheme} />
          <Link to="/dashboard/products">
            <h3>مدیریت </h3>
          </Link>
          <Link to="/cart">
            <FaShoppingCart />
            <NumberCart>5</NumberCart>
          </Link>
        </CustomerTab>
      </HeaderStyles>
  
  );
}
