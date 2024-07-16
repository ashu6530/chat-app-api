import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handleClick = () =>{
    if(!name){
      setError('Name is required')
      return
    }
    setError('')
    navigate('/chat', { state: { name } });
    
  } 

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col items-center space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h2a2 2 0 012 2v0a2 2 0 01-2 2H3v4h6a2 2 0 002-2v0a2 2 0 00-2-2H9m6 0h2a2 2 0 012 2v0a2 2 0 01-2 2h-2v4h6a2 2 0 002-2v-4m-6-4h6v4h-6m0-4v4"
            />
          </svg>
        </div>
        <h1 className="text-gray-800 text-3xl font-bold">Let's Chat</h1>
        <input
          type="text"
          id="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name..."
          className="border-0 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 text-gray-800 bg-transparent w-full px-2 py-1 transition duration-300"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button 
        onClick={handleClick}
        className="py-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Login 👋
        </button>
      </div>
    </div>
  );
};

export default Join;
