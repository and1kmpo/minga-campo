// import Welcome from "../components/Welcome"
import { Link as Anchor } from "react-router-dom";
import React from "react";

export default function NotAllowed() {
  return (
    <div className="flex flex-col md:pt-[10%] w-full min-h-screen items-center justify-center">
      <h1 className="text-2xl mb-2 font-poppins">
        Unauthorized <code>401</code>{" "}
      </h1>
      <div className="p-7">
        <h1 className="font-poppins">Access denied</h1>
        <p className="font-poppins text-justify my-5">
          We're sorry, but you don't have permission to access this page.
        </p>
      </div>
      <div className="flex w-full justify-center my-10">
        <Anchor
          to="/"
          className="flex justify-center items-center bg-primary w-[70%] md:w-[30%] lg:w-50 h-12 rounded-full text-xl text-gray-200 font-bold col-span-2 "
        >
          {" "}
          Go back home!
        </Anchor>
      </div>
    </div>
  );
}
