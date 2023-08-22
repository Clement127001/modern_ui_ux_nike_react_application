import React from "react";

const Button = ({ label, imgURl }) => {
  return (
    <a
      href="#products"
      className=" flex justigy-between items-center gap-3 mt-6 outline-coral-red bg-coral-red rounded-full text-white px-4 py-2  cursor-pointer "
    >
      <div>{label}</div>

      {imgURl && <img src={imgURl} alt="arrow right" />}
    </a>
  );
};

export default Button;
