import React from "react";
import Card from "../card/Card";
import css from "./Main.module.css";

export default function Main() {
  return (
    <div className="container">
      <div className={css.main}>
        <div className={css.card}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
