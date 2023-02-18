import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code !== "Escape") {
        return;
      }
      callback();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
};
