/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Image from "../src/images/pattern-divider-mobile.svg";
import Dice from "../src/images/icon-dice.svg";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

// API call using async
export default function App() {
  const [advice, setAdvice] = useState({});

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main
      className="bg-DarkGblue mx-5 lg:mx-auto my-60 flex-col
     text-center rounded-lg pt-10 max-w-lg  "
    >
      <div className="mx-6">
        <div className="space-y-5">
          <p className="text-NeonGreen tracking-[4px]  ">ADVICE #{advice.id}</p>
          <p className=" text-Lightcyan font-bold">"{advice.advice}"</p>
        </div>
        <div className="flex justify-center py-5">
          <img src={Image} />
        </div>
        <div className=" flex justify-center relative top-7">
          <div
            className=" rounded-full bg-NeonGreen px-4 py-4 cursor-pointer"
            onClick={fetchAdvice}
          >
            <img src={Dice} className="" />
          </div>
        </div>
      </div>
    </main>
  );
}
