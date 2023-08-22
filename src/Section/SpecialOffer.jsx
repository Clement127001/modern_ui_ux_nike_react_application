import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className=" max-container flex flex-col-reverse xl:flex-row xl:gap-10 gap-16">
      <div className=" items-center">
        <img src={offer} alt="offer" />
      </div>

      <div className="flex flex-col  xl:w-2/5 w-full items-start justify-center ">
        <h1
          className="text-[64px] leading-[68px] 
        max-sm:text-[48px] max-sm:leading-[56px] text-palanquin font-semibold pt-5 z-10"
        >
          Special
          <span className="text-coral-red"> Offer</span>
        </h1>
        <p className="mt-4 info-text max-sm:text-[17px] max-sm:leading-[24px] ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="my-6 info-text max-sm:text-[17px] max-sm:leading-[24px]">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button label="View Details" imgURL={arrowRight} />

          <Button
            bgColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
            label="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
