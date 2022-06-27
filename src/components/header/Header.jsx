import React from "react";
import logo from "../images/logo.svg";
import iconMan from "../images/icon-man.svg";
import css from "./Header.module.css";

export default function Header() {
  return (  
      <div className={css.header}>
        <div className={css.right}>
          <img className={css.logo} src={logo} alt="#" />
          
          <span className={css.text}>ГЛАВНАЯ</span>
          <span className={css.text}>О ПРОЕКТЕ</span>
        </div>
        <div className={css.left}>
          <input className={css.input} type="search"  />
          <img className={css.iconMan} src={iconMan} alt="#" />
        </div>
      </div>
  );
}
