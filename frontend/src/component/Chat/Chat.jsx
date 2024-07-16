import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { IoMdSend } from "react-icons/io";
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { ImCancelCircle } from "react-icons/im";

let socket;
const ENDPOINT = "http://localhost:3000/";

const Chat = () => {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };
  const [id, setId] = useState("");
  const [message, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const send = () => {
    socket.emit("message", { message, id });
    setChat("");
  };

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ["websocket"],
      reconnectionAttempts: 5, // Limit to 5 reconnection attempts
      reconnectionDelay: 1000,
     });
    socket.on("connect", () => {
      alert("Connected");
      setId(socket.id);
    });
    socket.emit("joined", { name });
    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      
    });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      
    });
    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      
    });
    return () => {
      socket.on("disconnect");
      
      socket.off();
      socket.disconnect()
      
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
     
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  console.log(message);
  console.log(messages);

 
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-white  shadow-lg rounded-xl  w-full max-w-sm flex flex-col items-center space-y-6 overflow-hidden">
        <div className="w-full bg-red-500 h-16 flex justify-between items-center">
            <div className="ml-2 text-xl font-bold text-white">Let's Chat</div>
            <Link to='/'><div className="mr-2 text-xl font-bold text-white"><ImCancelCircle /></div></Link>
            
        </div>
        <ScrollToBottom className="w-full h-96 flex ">
          {messages.map((item, i) => (
            <Message
              key={i}
              warning = {item.message}
              message={(item.message)}
              user={item.id === id ? "" : item.user}
              direction={item.id === id ? "right" : "left"}
            />
          ))}
        </ScrollToBottom>
        <div className="w-full h-16 bg-blue-500 relative">
          <input
            type="text"
            value={message}
            onKeyPress={(e)=>e.key ==='Enter' ? send() : null }
            onChange={(e) => setChat(e.target.value)}
            className="bg-transparent w-full h-16 focus:outline-none focus:border-blue-500 text-lg"
            id="chatInput"
          />
          <button
            onClick={send}
            
            className="absolute top-3 right-2 px-4 py-2  bg-blue-900 hover:bg-blue-600 transition duration-300 rounded-full text-white cursor-pointer"
          >
            <IoMdSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
