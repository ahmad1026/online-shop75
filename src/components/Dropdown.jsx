import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DropdownItem, ItemTitle } from "../styles";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
export default function Dropdown({ status,category }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnclick(item) {}
  return (
    <Link to={`/products/${category.title}/${category.id}`}>
      <DropdownItem
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        active={status ? true : false}
      >
        <ItemTitle >
          <p>{category.title}</p>
        </ItemTitle>
        {/* {open ? <FaAngleUp /> : <FaAngleDown />} */}
      </DropdownItem>
      {/* {open && (
        <ul>
          {data.items.map((item) => (
            <NavLink to={""}>
              <li>{item}</li>
            </NavLink>
          ))}
        </ul>
      )} */}
    </Link>
  );
}
