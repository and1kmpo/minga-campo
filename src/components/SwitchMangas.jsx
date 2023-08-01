import React from "react";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";

export default function SwitchMangas() {
  return (
    <>
      <div className="flex justify-center me-auto mx-auto">
        <div className="mr-10 text-gray-600">new</div>
        <RiToggleFill className="text-3xl text-[#12B28C]"></RiToggleFill>
        <div className="mx-10 text-gray-600">old</div>
      </div>
    </>
  );
}
