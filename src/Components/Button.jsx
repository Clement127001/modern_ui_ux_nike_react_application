import React from "react";

const Button = ({ label, imgURl }) => {
  return (
    <a
      href="#shop"
      className=" flex justigy-between items-center gap-3 mt-10 outline-coral-red bg-coral-red rounded-full text-white px-4 py-2  cursor-pointer "
    >
      <div>{label}</div>

      <img src={imgURl} alt="arrow right" />
    </a>
  );
};

export default Button;
