import React from "react";

const Button = ({ label, imgURL, bgColor, textColor, borderColor }) => {
  return (
    <a
      href="#products"
      className={` flex justigy-between items-center gap-3 mt-6  border-2 ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : `border-coral-red bg-coral-red   text-white`
      } rounded-full px-4 py-2  cursor-pointer `}
    >
      <div>{label}</div>

      {imgURL && <img src={imgURL} alt="arrow right" />}
    </a>
  );
};

export default Button;
