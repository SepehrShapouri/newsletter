import React from "react";
import Button from "./Button";
import tick from "../assets/images/icon-list.svg";
function SuccessMessage({ customerEmail, setSubscribed }) {
  return (
    <div className="bg-mainWhite  sm:rounded-[30px] flex flex-col gap-[2rem] w-screen h-svh sm:max-w-[430px] sm:max-h-[450px] sm:px-[3rem] px-[2rem] py-[2rem] justify-between">
      <div className="flex flex-col gap-[2rem] m-auto mt-[10rem] sm:m-0">
        <img src={tick} alt="tick icon" className="w-[70px]" />
        <p
          className="text-[50px] font-bold text-darkSlateGray"
          style={{ lineHeight: "50px" }}
        >
          Thanks for subscribing!
        </p>
        <p className="text-sm">
          a confirmation email has been sent to <strong>{customerEmail}</strong>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <Button onClick={() => setSubscribed(false)}>Dismiss message</Button>
    </div>
  );
}

export default SuccessMessage;
