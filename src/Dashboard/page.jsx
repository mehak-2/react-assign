import React from "react";
import profile from "../../src/assets/profile.jpg";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="bg-[#F7F8F9] min-h-screen">
      <div className="bg-white p-4 shadow-sm">
        <h1 className="text-lg sm:text-[28px] font-medium text-[#1D2226] text-left">
          Account Settings
        </h1>
      </div>

      <div className="p-4 sm:p-6 md:w-full ">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative">
            <img
              className="h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] rounded-full object-cover"
              src={profile}
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-lg text-left sm:text-xl font-medium text-[#1D2226]">
              {userData.fullName}
            </h2>
            <p className="text-sm sm:text-base text-[#1D2226]">
              {userData.email}
            </p>
          </div>
        </div>

        <div className="p-3 sm:p-4 rounded-md">
          <p className="text-sm sm:text-base text-[#1D2226] leading-relaxed text-left">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
