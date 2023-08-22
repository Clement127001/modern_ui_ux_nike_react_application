import React from "react";
import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[120px] h-[120px]">
        <img src={imgURL} className="rounded-full object-cover" />
      </div>

      <p className="info-text lg:max-w-lg mt-4">{feedback}</p>

      <div className="flex gap-2 mt-4">
        <img src={star} width={24} height={24} />
        <p className="text-slate-gray font-montserrat">({rating})</p>
      </div>

      <h3 className="text-xl font-palanquin font-semibold mt-4">
        {customerName}
      </h3>
    </div>
  );
};

export default CustomerReviewCard;
