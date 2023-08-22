import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="py-14 px-10 rounded-xl shadow-2xl sm:w-[350px] sm:max-w-[350px]">
      <div className="flex w-11 h-11 bg-coral-red rounded-full p-2.5">
        <img src={imgURL} alt="service-icon" width={24} height={24} />
      </div>

      <h3 className="mt-3 font-palanquin text-[26px] leading-normal font-semibold tracking-tight">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
