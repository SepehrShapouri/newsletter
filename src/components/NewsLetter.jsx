import React, { useState } from "react";
import mobileSignUp from "../assets/images/illustration-sign-up-mobile.svg";
import desktopSignUp from "../assets/images/illustration-sign-up-desktop.svg";
import tick from "../assets/images/icon-list.svg";
import MonthlyUpdate from "./MonthlyUpdate";
import Subscribe from "./Subscribe";
const montlyUpdates = [
  { id: 1, label: "Product discovery and building what matters" },
  { id: 2, label: "Measuring to ensure updates are a scucess" },
  { id: 3, label: "And much more!" },
];
function NewsLetter({ subscribe }) {
  return (
    <div className="bg-mainWhite flex sm:p-6 sm:rounded-[30px] sm:max-w-[900px] w-screen h-svh sm:h-auto">
      <div className="flex flex-col sm:pl-[2rem] sm:pr-[3.5rem] sm:py-[2rem] justify-between">
        <div className="block sm:hidden">
          <img src={mobileSignUp} alt="" className="w-full" />
        </div>
        <div className=" flex flex-col gap-[1rem] sm:px-0 px-[2rem]">
          <h1 className="text-[50px] font-bold text-darkSlateGray">
            Stay updated!
          </h1>
          <p className="text-darkSlateGray">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex flex-col gap-[0.8rem] ">
            {montlyUpdates.map((update) => (
              <MonthlyUpdate update={update} />
            ))}
          </div>
        </div>
        <div className="mb-[1.5rem] sm:px-0 px-[2rem]">
          <Subscribe subscribe={subscribe} />
        </div>
      </div>
      <div className="hidden sm:block">
        <img src={desktopSignUp} alt="" />
      </div>
    </div>
  );
}

export default NewsLetter;
