import React from "react";

const FaqsCard = ({ title, text }) => {
  return (
    <div className="bg-white shadow-2xl rounded-md py-5 px-3">
      <h1 className="text-md font-bold text-[#172035] py-3">{title}</h1>

      <p className="text-base tracking-wide">{text}</p>
    </div>
  );
};

export default FaqsCard;
