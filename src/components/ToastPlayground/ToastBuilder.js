import React from "react";

import { ToastContext } from "../ToastProvider";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const defaultVariant = VARIANT_OPTIONS[0];

export const ToastBuilder = () => {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(defaultVariant);
  const { toastList, setToastList } = React.useContext(ToastContext);

  const handleAddToast = () => {
    const newToast = {
      id: window.crypto.randomUUID(),
      variant,
      message,
    };
    setToastList([...toastList, newToast]);
    setMessage("");
    setVariant(defaultVariant);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddToast();
  };

  return (
    <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: "baseline" }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={styles.messageInput}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((option) => {
            return (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button type="submit">Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
};
