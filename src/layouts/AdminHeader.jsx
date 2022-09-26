import React from "react";
import { FaStore, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeaderStyles, LogoStyle, CustomerTab } from "../styles";
import AdminTabbar from "../components/AdminTabbar";
import { Toogle } from "../components/ToogleTheme";
export default function CustomerHeader({ theme , toogleTheme }) {
  return (
      <HeaderStyles>
        <LogoStyle>
          <FaStore />
          <h5> فروشگاه دیجیتال </h5>
        </LogoStyle>
        <AdminTabbar/>{/*Admin tabbar*/}
        <CustomerTab> 
          <Link to="/">
            <FaHome />
          </Link>
          <Toogle theme={theme} toggleTheme={toogleTheme} />
        </CustomerTab>
      </HeaderStyles>
  
  );
}
