import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  const newLocal = "text-";
  return (
    <section className="flex flex-col xl:flex-row  justify-between items-center max-container gap-12 xl:p-8 p-2">
      <div className="flex flex-col justify-start items-start">
        <h2 className=" text-4xl font-montserrat font-bold  leading-3xl lg:max-w-xl ">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>

        <p className="mt-4 info-text xl:max-w-lg ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="xl:max-w-lg">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={shoe8} />
      </div>
    </section>
  );
};

export default SuperQuality;
