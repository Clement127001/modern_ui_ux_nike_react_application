import React from "react";
import { products } from "../Constants";
import PopularProductsCard from "../Components/PopularProductsCard";
const PopularProducts = () => {
  return (
    <section className=" max-container p-8 max-sm:p-1 " id="products">
      <div className="flex flex-col gap-2 justify-start">
        <h2 className="text-[62px] max-sm:text-[48px] leading-tight font-montserrat font-semibold">
          Our <span className="text-coral-red">Popular </span> Products
        </h2>
        <p className="max-w-lg w-full font-montserrat text-slate-gray max-sm:text-[16px]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8 mt-12">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
