import React from "react";
import { reviews } from "../Constants";
import CustomerReviewCard from "../Components/CustomerReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container text-center">
      <h2 className="text-4xl font-bold font-palanquin">
        What Our <span className="text-coral-red">Customers </span> Say?
      </h2>
      <p className="lg:max-w-lg mx-auto mt-4 info-text">
        {" "}
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="my-14 flex justify-evenly items-center gap-10 lg:flex-row flex-col">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
