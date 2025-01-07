import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm cursor-pointer rounded-full bg-cyan-400  font-semibold uppercase tracking-wide text-slate-800 transition-colors duration-300 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm cursor-pointer px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 border-slate-400  font-semibold uppercase tracking-wide text-slate-800 transition-colors duration-300 hover:bg-slate-300 hover:text-slate-800 focus:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:text-slate-800 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <div disabled={disabled} onClick={onClick} className={style[type]}>
        {children}
      </div>
    );

  return (
    <div disabled={disabled} className={style[type]}>
      {children}
    </div>
  );
}
