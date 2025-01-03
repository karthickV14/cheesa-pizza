import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Cheesa Pizza</Link>
      <SearchOrder />
    </header>
  );
}
