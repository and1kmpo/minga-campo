import React, { useEffect, useState } from "react";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";

export default function SwitchMangas() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-center me-auto mx-auto my-5">
        <div className="mr-10 text-gray-600">new</div>

        {toggle === false ? (
          <RiToggleFill
            className="text-3xl text-[#12B28C] transition hover:scale-110"
            onClick={() => setToggle(!toggle)}
          ></RiToggleFill>
        ) : (
          <RiToggleLine
            className="text-3xl text-[#12B28C] transition hover:scale-110"
            onClick={() => setToggle(!toggle)}
          ></RiToggleLine>
        )}

        <div className="mx-10 text-gray-600">old</div>
      </div>
    </>
  );
}
