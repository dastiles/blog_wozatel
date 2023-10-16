import React from "react";
import StudentSaysCard from "./StudentSaysCard";

const StudentSays = () => {
  return (
    <div className="w-[85vw] mx-auto my-40">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-[#172035] tracking-wide pb-20 text-center">
          What our students says
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 ">
          <StudentSaysCard
            name={"Charles Madhuku"}
            text={
              '"WozatelOnline Coaching Program has been my online entrepreneurship compass. Its structured content and interactive lessons have illuminated the intricate online landscape. Instructors provided insights and solutions, making the journey less daunting. Flexibility allowed me to master concepts while nurturing my online venture. KudaOnline was instrumental in achieving my online business milestones."'
            }
          />
          <StudentSaysCard
            name={"Calvin Magaya"}
            text={
              '"The WozatelOnline Coaching Program is my online entrepreneurship game-changer. It delivers comprehensive materials covering everything from marketing strategies to e-commerce tactics. Live Q&A sessions provided by experts added a personal touch to learning. The program\'s user-friendly platform and downloadable resources are assets. KudaOnline equipped me with the knowledge and tools needed for online business excellence."'
            }
          />
          <StudentSaysCard
            name={"Saidi Agibu"}
            text={
              '"My online business flourished with the KudaOnline Coaching Program. Its custom approach imparted practical skills that translated directly into my ventures. On-demand learning let me progress while managing my online store. Engaging in the program\'s discussion forums connected me with a supportive community of like-minded entrepreneurs. KudaOnline propelled my online business growth to new heights."'
            }
          />
        </div>
        <button className="bg-[#3b3abe] text-white px-6 py-3 rounded-md mt-[10rem] z-50">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default StudentSays;
