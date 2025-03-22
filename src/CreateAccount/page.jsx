import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.emailAddress.value,
      password: e.target.password.value,
      companyName: e.target.companyName.value,
      isAgency: e.target.agency.value === "yes",
    };

    localStorage.setItem("userData", JSON.stringify(formData));

    navigate("/LoginAccount");
  };

  return (
    <div className="flex flex-col bg-[#F7F8F9] font-rubik p-4 sm:p-8 min-h-screen">
      <h1 className="text-[24px] sm:text-[28px] font-medium mb-6 sm:mb-8 text-left font-rubik md:w-full w-44">
        Create your PopX account
      </h1>

      <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Full Name</span>
              <span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Phone number</span>
              <span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label
              htmlFor="emailAddress"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Email address</span>
              <span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Password</span>
              <span className="text-[#DD4A3D]">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="absolute text-start flex items-start text-[#1D2226] -mt-2 ml-2 bg-[#F7F8F9] px-2 text-xs sm:text-sm"
            >
              <span className="text-[#6C25FF]">Company name</span>
            </label>
            <input
              type="text"
              id="companyName"
              className="mt-1 block w-full rounded-md border border-[#CBCBCB] bg-[#F7F8F9] px-2 sm:px-3 py-2 text-gray-900 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-[#7662E7]"
              placeholder="Enter company name"
            />
          </div>

          <div>
            <label className=" text-[#1D2226] mb-1 text-sm flex justify-start">
              <span className="text-[#1D2226] ">Are you an Agency?</span>
              <span className="text-[#DD4A3D]">*</span>
            </label>
            <div className="mt-2 gap-4 flex flex-row">
              <div className="flex items-center">
                <input
                  id="agencyYes"
                  name="agency"
                  type="radio"
                  value="yes"
                  className="h-4 w-4 border-gray-300 text-[#7662E7] focus:ring-[#7662E7]"
                />
                <label
                  htmlFor="agencyYes"
                  className="ml-2 block text-sm text-[#1D2226]"
                >
                  Yes
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="agencyNo"
                  name="agency"
                  type="radio"
                  value="no"
                  className="h-4 w-4 border-gray-300 text-[#7662E7] focus:ring-[#7662E7]"
                />
                <label
                  htmlFor="agencyNo"
                  className="ml-2 block text-sm text-[#1D2226]"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7662E7] text-white py-2 px-4 rounded-md hover:bg-[#6753e3] transition-colors mt-auto text-sm sm:text-base"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
