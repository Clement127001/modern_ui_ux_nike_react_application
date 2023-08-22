import React from "react";

const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImg }) => {
  const clickHandler = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`bg-center bg-card  p-4  rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-2 border-coral-red "
          : "border-transparent"
      } cursor-pointer object-contain `}
      width={127}
      height={100}
      onClick={clickHandler}
    >
      <div>
        <img
          src={imgURL.thumbnail}
          alt="shoe-collection"
          width={90}
          height={90}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
