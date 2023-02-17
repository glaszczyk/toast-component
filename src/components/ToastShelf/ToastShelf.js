import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ data, onRemove }) {
  return (
    <ol className={styles.wrapper}>
      {data.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast variant={item.variant} onClose={onRemove} id={item.id}>
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
