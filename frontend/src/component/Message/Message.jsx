import React from "react";

const Message = ({ user, message, direction,warning}) => {
  const messageClass =
    direction === "right" ? "flex justify-end" : "flex justify-start";
  const bgColorClass = direction === "right" ? "bg-green-400" : "bg-blue-400";

  return (
    <div className={`w-full ${messageClass}`}>
      <div
        className={`m-2 px-4 py-2 rounded-lg text-black font-mono ${bgColorClass} `}
      >
        {user ? `${user}: ${message}` : `You: ${message}`}
      </div>
    </div>
  );
};

export default Message;
