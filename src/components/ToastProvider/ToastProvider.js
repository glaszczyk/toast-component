import React from "react";

export const ToastContext = React.createContext({});
export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = React.useState([]);

  const addToast = React.useCallback(
    (toast) => {
      const newToast = {
        ...toast,
        id: window.crypto.randomUUID(),
      };
      setToastList([...toastList, newToast]);
    },
    [toastList]
  );

  const removeToast = React.useCallback(
    (id) => {
      const nextToastList = toastList.filter((item) => item.id !== id);
      setToastList(nextToastList);
    },
    [toastList]
  );

  const value = React.useMemo(
    () => ({
      toastList,
      setToastList,
      addToast,
      removeToast,
    }),
    [toastList, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
