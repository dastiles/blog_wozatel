import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#172035]">
      <div className="w-[85vw] mx-auto ">
        <div className="flex justify-between lg:items-center py-20 gap-5 lg:flex-row flex-col">
          <div className="lg:w-3/12">
            <h1 className="text-3xl text-white font-bold pb-3">
              WozatelOnline Coaching Program
            </h1>
            <p className="text-base text-white tracking-wide ">
              Wozatel Coaching Program is a transformative journey into the
              world of digital entrepreneurship. With structured content and
              interactive lessons, it illuminates the path for budding online
              business owners.
            </p>
          </div>
          <div className="lg:w-3/12">
            <h1 className="text-2xl font-bold text-white font-bold">
              Services
            </h1>

            <ul className="pt-3 text-md text-white flex flex-col gap-4">
              <li>Know your visitors</li>
              <li>Know your audience</li>
              <li>Build your marketing strategy</li>
            </ul>
          </div>
          <div className="lg:w-3/12">
            <h1 className="text-2xl font-bold text-white font-bold">
              Important Links
            </h1>

            <ul className="pt-3 text-md text-white flex flex-col gap-4">
              <li>About</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="lg:w-3/12">
            <h1 className="text-2xl font-bold text-white font-bold">
              Get In Touch
            </h1>

            <ul className="pt-3 text-md text-white flex flex-col gap-4">
              <li>+263771315239</li>
              <li>charlesmadhuku11@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
