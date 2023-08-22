import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, rating, price }) => {
  return (
    <section className="flex flex-1  flex-col justify-start gap-6">
      <div className="py-4">
        <img src={imgURL} />
      </div>

      <div>
        <div className="flex w-full gap-2">
          <img src={star} width={24} height={24} />
          <p className="text-[18px] font-montserrat text-slate-gray">
            ({rating})
          </p>
        </div>
        <h3 className="font-palanquin text-[20px] font-semibold mt-2">
          {name}
        </h3>
        <p className="text-coral-red mt-1 font-semibold font-montserrat">
          {price}
        </p>
      </div>
    </section>
  );
};

export default PopularProductsCard;
