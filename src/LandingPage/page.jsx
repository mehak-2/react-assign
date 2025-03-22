import React from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end bg-[#F7F8F9] font-inter p-4 sm:p-0">
      <div className="flex flex-col mb-8 w-full sm:w-[300px] mx-auto px-4 sm:px-0">
        <h1 className="text-2xl font-rubik mb-2 text-left">Welcome to PopX</h1>
        <p className="text-[#1D2226] text-base mb-7 text-left font-rubik font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center mb-8 w-full px-4 sm:px-0">
        <button
          onClick={() => navigate("/CreateAccount")}
          className="bg-[#6C25FF] w-full sm:w-[300px] h-12 text-[#FFFFFF] p-2 rounded-md"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/LoginAccount")}
          className="bg-[#6C25FF4B] w-full sm:w-[300px] h-12 text-[#1D2226] p-2 rounded-md"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Page;
