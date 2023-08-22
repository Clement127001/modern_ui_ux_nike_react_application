import React from "react";
import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const Servies = () => {
  return (
    <div className="flex flex-1 max-container w-full  gap-12 justify-center flex-wrap">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Servies;
