import React from "react";
import css from "./Auth.module.css";
import logo from "../../../components/images/logo2.svg";

export default function Auth() {
  return (
    <div className="container">
      <div className={css.main}>
        <img src={logo} alt="#" />
        <form className={css.box}>
          <p>Авторизация</p>
          <hr />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <p></p>
          <a href=""></a>
          <p></p>
          <a href=""></a>
          <button></button>
        </form>
      </div>
    </div>
  );
}
