import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full  max-container flex flex-col xl:flex-row justify-center items-center max-sm:gap-10"
    >
      <div className="flex flex-col  xl:w-2/5 w-full items-start pt-28 max-h-screen  max-xl:padding-x max-xl:space-x-4 max-sm:p-4 max-sm:pt-28 ">
        <p className="text-monsterrat text-coral-red text-[16px] font-light">
          Our Summer Collections
        </p>
        <h1
          className="text-[72px] leading-[82px] 
        max-sm:text-[48px] max-sm:leading-[56px] text-palanquin font-semibold pt-5 z-10"
        >
          <span className="xl:bg-white xl:whitespace-nowrap xl:pr-[25%] rounded-md">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike </span> Shoes
        </h1>
        <p className="max-w-sm text-slate-gray text-montserrat text-md mt-2">
          Discover stylish Nike's arrivals, quality, comfort and innovation for
          your active life.
        </p>

        <Button label="Shop Now" imgURL={arrowRight} />

        <div className="flex gap-8 mt-10">
          {statistics.map((stat) => (
            <div className="max-w-sm" key={stat.label}>
              <p className="text-[30px] font-bold text-palanquin">
                {stat.value}
              </p>
              <p className="text-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* big shoe image */}

      <div className="flex flex-1 justify-center items-center h-full xl:min-h-screen  bg-white bg-hero bg-cover bg-center  padding-x z-0  py-40 rounded-r-xl max-sm:m-4 max-sm:py-20 max-xl:rounded-xl relative transition-all">
        <img
          src={bigShoeImg}
          className="object-contain z-10 relative"
          width={500}
          height={502}
        />

        <div className="absolute bottom-[-5%] max-[476px]:left-[2%] flex gap-4 sm:gap-6 max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              bigShoeImg={bigShoeImg}
              changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
