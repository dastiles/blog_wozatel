import React from "react";
import FaqsCard from "./FaqsCard";

const Faqs = () => {
  return (
    <div className="w-[85vw] mx-auto mb-40">
      {" "}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-[#172035] tracking-wide pb-20 text-center">
          Frequently Q & A
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
          <FaqsCard
            title={"What does the KudaOnline Coaching Program cover?"}
            text={
              "The KudaOnline Coaching Program offers a diverse curriculum designed to empower aspiring online entrepreneurs. It provides structured content and interactive lessons that span various aspects of digital business, such as effective marketing strategies, building a strong online presence, and harnessing the power of social media."
            }
          />
          <FaqsCard
            title={
              "How flexible is the KudaOnline Coaching Program for those with busy schedules?"
            }
            text={
              "Flexibility is a cornerstone of the program. With on-demand access to course materials, you can learn at your own pace, allowing you to balance your entrepreneurial journey with other commitments, be it a job, studies, or personal life."
            }
          />
          <FaqsCard
            title={
              "What kind of support can participants expect during the program?"
            }
            text={
              "Participants receive personalized support throughout their journey. Live Q&A sessions with experts allow you to ask questions, clarify doubts, and gain practical insights. Instructors also provide feedback on assignments, ensuring you're on the right track."
            }
          />
          <FaqsCard
            title={
              "Is the KudaOnline Coaching Program suitable for beginners without prior entrepreneurial experience?"
            }
            text={
              "Absolutely! The program is designed to cater to a wide range of individuals, whether you're new to entrepreneurship or looking to enhance your online business skills. The materials are structured to be accessible, and the expert guidance will help you build a strong foundation for success."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
