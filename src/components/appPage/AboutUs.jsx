import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[85vw] mx-auto my-20">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-20">
        <div className=" w-full lg:w-3/6">
          <img src="./bank.jpeg" alt="" />
        </div>
        <div className=" w-full lg:w-3/6">
          <h1 className="text-5xl font-semibold">About Us</h1>
          <p className="text-base py-5 tracking-wide">
            At Wazatel, we're dedicated to propelling aspiring online
            entrepreneurs towards their business dreams using the limitless
            potential of the internet. Our mission is simple yet powerful:
            eliminate the uncertainties that often accompany online ventures and
            provide you with unwavering guidance. Whether you're a newcomer
            seeking to launch your online business or aiming to refine your
            digital presence, our program offers the strategic roadmap you need
            for success. <br /> <br /> Beyond knowledge, we foster a vibrant
            community of like-minded individuals who share your ambitions.
            Connect, collaborate, and learn alongside fellow entrepreneurs, as
            you absorb actionable insights that drive results. Join us at
            KudaOnline, where your online entrepreneurship journey begins, and
            together, we'll turn your aspirations into achievements.
          </p>
          <div className="flex justify-between items-center mt-10 lg:flex-row flex-col gap-2">
            <div className="lg:border-r-[1px] border-gray-400">
              <h1 className="text-xl font-bold ">Our Mission</h1>
              <p className="text-base py-2">
                Our mission is to empower young individuals to not only forge
                their own path to employment but also to lay the foundation for
                enduring enterprises.
              </p>
            </div>
            <div className="lg:pl-5">
              <h1 className="text-xl font-bold ">Our Vision</h1>
              <p className="text-base py-2">
                To envision a landscape where the youth possess the tools to not
                only generate self-employment opportunities but also construct a
                landscape of sustainable and thriving businesses.
              </p>
            </div>
          </div>

          <button className="bg-[#3b3abe] text-white px-6 py-3 rounded-md mt-10">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
