import React, { lazy } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full max-h-screen max-container flex flex-col xl:flex-row justify-center items-center gap-10 border-2 border-red-50 "
    >
      <div className="flex flex-col  xl:w-2/5 w-full items-start max-xl:padding-x pt-28 max-h-screen">
        <p className="text-monsterrat text-coral-red text-[16px] font-light">
          Our Summer Collections
        </p>
        <h1 className="text-[72px] max-sm:text-[64px] leading-[82px] text-palanquin font-medium pt-5 z-20">
          <span className="xl:bg-white xl:whitespace-nowrap pr-[25%] z-10 rounded-md">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike </span> Shoes
        </h1>
        <p className="max-w-sm text-slate-gray text-montserrat text-md mt-2">
          Discover stylish Nike's arrivals, quality, comfort and innovation for
          your active life.
        </p>

        <Button label="Shop Now" imgURl={arrowRight} />
        <div className="flex gap-8 mt-10">
          {statistics.map((stat) => (
            <div className="max-w-sm" key={stat.label}>
              <p className="text-[38px] font-bold text-palanquin">
                {stat.value}
              </p>
              <p className="text-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* big shoe image */}

      <div className="flex flex-1 justify-center items-center h-full xl:min-h-screen  bg-white bg-hero bg-cover bg-center md:py-40 padding-x z-0">
        <img
          src={bigShoe1}
          className="object-contain z-10 relative"
          width={510}
          height={502}
        />
      </div>
    </section>
  );
};

export default Hero;
