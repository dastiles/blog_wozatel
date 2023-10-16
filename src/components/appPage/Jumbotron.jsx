import React from "react";

const Jumbotron = () => {
  return (
    <div className="py-4 px-6 flex">
      <div className="hidden lg:block">
        <div className="w-[100px] h-[100px] rounded-full bg-[#3b3abe] flex items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#fff]"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="px-8 lg:px-16 flex gap-2 lg:gap-5 items-center   mt-10 lg:mt-0">
            <div className="bg-[#3b3abe] w-[70px] h-[3px]"></div>
            <h3 className="text-sm lg:text-lg font-bold tracking-wide">
              WozatelOnline Coaching Program
            </h3>
          </div>
          <div className="px-8 lg:px-16">
            <h1 className="text-[2rem] lg:text-[3.5rem] font-bold text-[#172035] tracking-wide ">
              Online <br className="hidden lg:block" /> Entrepreneurship <br />{" "}
              Unleashed: Your <br />
              Gateway to <br /> Digital Business <br /> Triumph
            </h1>
          </div>
          <div className="px-8 lg:px-16 py-5">
            <p className="text-sm lg:text-md">
              Unlock the Strategies, Skills and Mindset for Thriving in Digital
              Business Landscape
            </p>

            <button className="bg-[#f04242] px-6 py-2 rounded-sm text-white mt-10">
              Get Started it's $50.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
