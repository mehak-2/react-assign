import React from "react";
import { useNavigate } from "react-router-dom";

const LoginAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.emailAddress.value;
    const password = e.target.password.value;

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      navigate("/Dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col bg-[#F7F8F9] font-rubik p-4 sm:p-8 min-h-screen">
      <h1 className="text-[24px] sm:text-[28px] font-medium mb-4 sm:mb-8 text-left md:w-full w-44">
        Signin to your PopX account
      </h1>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-left md:w-full w-56">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="EmailAddress"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Email Address</span>
            </label>
            <input
              type="text"
              id="emailAddress"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter Email Address"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#CBCBCB] text-white py-2 px-4 rounded-md hover:bg-[#6753e3] transition-colors mt-6 sm:mt-8 text-sm sm:text-base"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginAccount;
