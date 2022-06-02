import React from "react";
import css from "./Card.module.css";

export default function Card() {
  return (
    <div className={css.card}>
      <div className={css.text}>
        <h3>Математика</h3>
        <p>15 вопросов</p>
      </div>
    </div>
  );
}
