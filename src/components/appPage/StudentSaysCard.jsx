import React from "react";

const StudentSaysCard = ({ name, text }) => {
  return (
    <div className="flex items-center flex-col lg:w-[25vw] w-[75vw] h-[400px] relative mt-[15rem] lg:mt-1.5">
      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center rounded-full z-50">
        <img src="./placeholder.jpg" alt="" />
      </div>
      <div className="absolute top-[30px]  shadow-2xl lg:w-[25vw] bg-white py-10 px-5 text-center rounded-md">
        <h2 className="text-2xl  text-[#172035] tracking-wide py-5 font-bold">
          {name}
        </h2>
        <p className="text-base tracking-wide pb-10">{text}</p>
      </div>
    </div>
  );
};

export default StudentSaysCard;
