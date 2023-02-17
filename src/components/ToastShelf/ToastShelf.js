import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastContext);

  const handleToastClose = (id) => {
    const nextToastList = toastList.filter((item) => item.id !== id);
    setToastList(nextToastList);
  };

  return (
    <ol className={styles.wrapper}>
      {toastList.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast
              variant={item.variant}
              onClose={() => handleToastClose(item.id)}
              id={item.id}
            >
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
