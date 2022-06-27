import React from "react";
import logo from "../../../components/images/logo2.svg";
import css from "./Entrance.module.css";

export default function Entrance() {
  return (
    <div className="container">
      <div className={css.box}>
        <img className={css.logo} src={logo} alt="#" />
        <button className={css.button}>Cтудент</button>
        <button className={css.button}>Преподаватель</button>
      </div>
    </div>
  );
}
