import React from "react";
import { AiFillBook, AiOutlineLaptop, AiOutlineSend } from "react-icons/ai";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
  return (
    <div className="w-[85vw] mx-auto mt-40">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-[#172035] tracking-wide">
          Why you should choose us
        </h1>
        <div className="w-full flex justify-center items-center gap-20 mt-40 lg:flex-row flex-col">
          <ChooseUsCard
            icon={<AiFillBook className="text-[#3b3abe] text-3xl " />}
            title={"Expert Guidance, Tailored for You"}
            text={
              "Our program offers personalized coaching from industry experts who understand the nuances of online entrepreneurship. Whether you're a novice or already have a digital presence, our guidance is customized to match your skill level and goals. Benefit from actionable insights that are directly applicable to your journey, ensuring you're always on the right track to success."
            }
          />
          <ChooseUsCard
            icon={<AiOutlineLaptop className="text-[#3b3abe] text-3xl " />}
            title={"Comprehensive Skill Set Development:"}
            text={
              "We're not just about theory – our program focuses on honing practical skills that drive real results. From crafting a compelling online presence to mastering e-commerce strategies, our curriculum equips you with the essential tools for navigating the digital business landscape. Gain the knowledge you need to excel in various aspects of online entrepreneurship."
            }
          />
          <ChooseUsCard
            icon={<AiOutlineSend className="text-[#3b3abe] text-3xl " />}
            title={"Thriving Community and Networking:"}
            text={
              "Join a vibrant community of driven individuals who share your aspirations. Connect, collaborate, and learn from fellow participants who are on similar paths. Networking opportunities abound as you interact with like-minded peers, fostering meaningful relationships that extend beyond the program. Our community becomes a valuable support system and a constant source of inspiration."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
