import React from "react";

export const ToastContext = React.createContext();
export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = React.useState([]);
  const value = React.useMemo(
    () => ({
      toastList,
      setToastList,
    }),
    [toastList]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
