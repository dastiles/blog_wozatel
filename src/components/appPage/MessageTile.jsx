import React from "react";
import ReactMarkdown from "react-markdown";

const MessageTile = ({ user, message }) => {
  return (
    <div
      className={` flex ${
        user ? "justify-end" : "justify-start"
      }   w-full relative py-5`}
    >
      <div
        className={`${
          user ? "  text-white bg-[#3b3abe]" : "bg-[#f7f7f7]"
        } max-w-[65%]  p-2 rounded-lg text-lg `}
      >
        {" "}
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MessageTile;
