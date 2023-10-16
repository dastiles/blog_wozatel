import React from "react";

const ChooseUsCard = ({ title, text, icon }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-[80px] h-[80px] shadow-xl bg-white rounded-full flex items-center justify-center text-center">
        {icon}
      </div>
      <h2 className="text-2xl  text-[#172035] tracking-wide py-5 text-center">
        {title}
      </h2>
      <p className="text-center text-base">{text}</p>
    </div>
  );
};

export default ChooseUsCard;
