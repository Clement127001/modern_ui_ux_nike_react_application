import React from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex lg:flex-row flex-col gap-10 items-center justify-between max-container"
      id="contact-us"
    >
      <h1 className="text-4xl leading-[60px] font-montserrat font-semibold  w-full">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 px-3  sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input sm:border-none"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full pb-3">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
