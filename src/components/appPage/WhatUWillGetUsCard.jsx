import React from "react";

const WhatUWillGetUsCard = ({title, text , btnText}) => {
  return (
    <div className=" w-full lg:w-2/6">
      <div className="w-full rounded-md overflow-hidden">
        <img src="./bank.jpeg" alt="" />
      </div>
      <h2 className="text-2xl  text-[#172035] tracking-wide py-5">
       {title}
      </h2>

      <p className="text-base ">
       {text}
      </p>

      <button className="bg-[#3b3abe] text-white px-6 py-3 rounded-md mt-10">
       {btnText}
      </button>
    </div>
  );
};

export default WhatUWillGetUsCard;
