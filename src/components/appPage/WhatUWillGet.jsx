import React from "react";
import WhatUWillGetUsCard from "./WhatUWillGetUsCard";

const WhatUWillGet = () => {
  return (
    <div className="w-[85vw] mx-auto my-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-[#172035] tracking-wide pb-20">
          What you will get
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <WhatUWillGetUsCard
            text={
              "Know your some audience dolor sit amet consectetur adipisicing elit. Mollitia, quis! Iste debitis id nulla, nesciunt minus enim"
            }
            title={"12 Weeks Online Coaching "}
            btnText={"I Want This"}
            src={"./book.jpeg"}
          />
          <WhatUWillGetUsCard
            text={
              "Know your some audience dolor sit amet consectetur adipisicing elit. Mollitia, quis! Iste debitis id nulla, nesciunt minus enim"
            }
            title={"Lifetime Access  "}
            btnText={"I Need This"}
            src={"./rover.jpg"}
          />
          <WhatUWillGetUsCard
            text={
              "Know your some audience dolor sit amet consectetur adipisicing elit. Mollitia, quis! Iste debitis id nulla, nesciunt minus enim"
            }
            title={"Build content strategy "}
            btnText={"Let Me Join"}
            src={"./rail.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatUWillGet;
