import React from "react";

import ToastShelf from "../ToastShelf";
import { ToastBuilder } from "./ToastBuilder";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <ToastBuilder />
    </div>
  );
}

export default ToastPlayground;
