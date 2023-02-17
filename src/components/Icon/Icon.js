import React from "react";

const checkSize = (size) => {
  if (typeof size === "number" && size >= 12 && size <= 48) {
    return size;
  }
  throw new Error("Size should be type of number between 12 and 48");
};
export const Icon = ({ icon: Icon, size = 18 }) => {
  return <Icon size={checkSize(size)} />;
};
