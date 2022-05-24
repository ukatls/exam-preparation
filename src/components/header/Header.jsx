import React from "react";
import logo from "../images/logo.svg";
import iconMan from "../images/icon-man.svg";
import css from "./Header.module.css";

export default function Header() {
  return (  
    <div className="container">
      <div className={css.header}>
        <div className={css.right}>
          <img src={logo} alt="#" />
          <span>Главная</span>
          <span>О проекте</span>
        </div>
        <div className={css.left}>
          <input type="search" name="" id="" />
          <img src={iconMan} alt="#" />
        </div>
      </div>
    </div>
  );
}
