import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="px4 flex items-center justify-between border-b border-slate-200 bg-cyan-400 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Cheesa Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
