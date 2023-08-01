// eslint-disable-next-line no-unused-vars
import React from "react";
import AuthorMangas from "../components/AuthorMangas";
import { RiEditBoxLine } from "react-icons/ri";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";

export default function Author() {
  return (
    <>
      <div className="w-full flex justify-start align-center flex-col pt-20 pb-40 h-screen bg-[#EBEBEB]">
        <div className="flex justify-center me-auto mx-auto">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="rounded-full h-14 me-5"
          />
          <div className="mx-auto d-flex mb-4">
            <h4 className="text-lg font-medium">Lucas Ezequiel Silva</h4>
            <h5 className="text-xs text-gray-600">Caseros, Buenos Aires</h5>
            <h5 className="text-xs text-gray-600">16/02/2000</h5>
          </div>
          <RiEditBoxLine className="mt-7 mx-2" />
        </div>
        <hr className="m-1 w-3/5 border mx-auto border-black bg-black" />
        <div className="flex justify-center me-auto mx-auto">
          <div className="mr-10 text-gray-600">new</div>
          <RiToggleFill className="text-3xl text-[#12B28C]"></RiToggleFill>
          <div className="mx-10 text-gray-600">old</div>
        </div>
        <AuthorMangas />
      </div>
    </>
  );
}
