import { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { FaRegMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
    <img className="mx-auto mt-10 top-3 w-70  h-20"alt="" src="/company-logo.svg"></img>
      <div className={`flex justify-center items-center h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={` p-8 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50 border'}`}>
          <div className=' mx-auto flex justify-center items-center p-8 rounded-lg h-10'>
          <img className="mx-auto  top-3 w-6  h-6 border  rounded-md "alt="" src="/lock.svg"></img>
          <img className="mx-auto  top-3 w-6  h-6 border rounded-md "alt="" src="/user.svg"></img>
          <img className="mx-auto  top-3 w-6  h-6 border rounded-md "alt="" src="/dollar.svg"></img>
          <img className="mx-auto  top-3 w-6  h-6 border rounded-md "alt="" src="/like.svg"></img>
          </div>

          <div className="mb-8  ">
            {/* Name */}
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[-0.1px] leading-[20px] mb-1">
                Name
              </div>
              <div className="relative">
                <input className="mb-4 w-full bg-transparent outline-none self-stretch rounded-md box-border h-[46px] px-4 pr-80 text-mini border-[1px] border-solid border-gray-300" type="email" placeholder="Email Address" required />
                <img
                  className="absolute right-3 top-3 w-5 h-5"
                  alt=""
                  src="/information.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative tracking-[-0.1px] leading-[20px] mb-2">
                Email*
              </div>
              <div className="relative">
                <input className="mb-1 w-full bg-transparent outline-none self-stretch rounded-md box-border h-[46px] px-4 pr-80 text-mini border-[1px] border-solid border-gray-300" type="email" placeholder="Email Address" required />
                <img
                  className="absolute right-3 top-3 w-5 h-5"
                  alt=""
                  src="/information.svg"
                />
              </div>
            <div className="self-stretch relative tracking-[-0.1px] leading-[20px] text-gray-400 mb-4">
                Please input a real Email Address
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] ">
                  Password*
                </div>
                <div className="relative">
                <input className="self-stretch bg-transparent rounded-md w-full box-border h-[46px] px-4 pr-17 text-mini border-[1px] border-solid border-neutral-400" type="text" placeholder="Bryan Koelpin" required />
                <img
                  className="absolute right-3 top-3 w-5 h-5"
                  alt=""
                  src="/information.svg"
                />
              </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] text-gray-400">
                  Please enter your password
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] ">
                  Confirm Password*
                </div>
                <div className="relative">
                <input className="self-stretch bg-transparent rounded-md box-border h-[46px] px-4 pr-18 text-mini border-[1px] border-solid border-neutral-400" type="text" placeholder="Bryan Koelpin" required />
                <img
                  className="absolute right-3 top-3 w-5 h-5"
                  alt=""
                  src="/information.svg"
                />
              </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[20px] text-gray-400">
                  Passwords need to match
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4 mt-4">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">I accept the Terms and Privacy Policy</span>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Dark mode</span>
              <button onClick={handleDarkModeToggle} className={`w-8 h-8 flex items-center justify-center rounded-full focus:outline-none ${isDarkMode ? 'bg-gray-500' : 'bg-gray-200'}`}>
                {isDarkMode ? <FaSun className="text-white" /> : <FaRegMoon className="text-gray-700" />}
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold">Next</button>
          </div>
        </div>
      </div>
    </>
  )
}