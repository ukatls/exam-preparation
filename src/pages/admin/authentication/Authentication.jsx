import React from "react";
import logo from "../../../components/images/logo2.svg";
import css from "./Authentication.module.css";

export default function Authentication() {
  return (
    <div className="container">
      <div className={css.box}>
        <img className={css.logo} src={logo} alt="#" />
        <button className={css.button}>Войти</button>
        <button className={css.button}>Регистрация</button>
      </div>
    </div>
  );
}
