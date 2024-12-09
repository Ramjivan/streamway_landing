import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const [remove, setRemove] = useState(false);
  return (
    <div
      className={`${remove === true ? `duration-1000 translate-y-[-90px] absolute w-full` : ``
        }`}
    >
      <div className="bg-yellow-100 w-full flex items-center justify-center relative">
        <p className="text-center py-3 text-xl ">
          Watch Getting Started Video !{" "}
          <Link
            href={"https://www.youtube.com/watch?v=wRDoIRKBMaM&t=180s"}
            target="_blank"
            className="hover:underline font-bold cursor-pointer text-base tracking-normal bg-[#d8563e] text-white rounded-md py-1 px-2"
          >
            Click here
          </Link>
        </p>
        <FontAwesomeIcon
          onClick={() => setRemove(true)}
          icon={faXmark}
          className="w-4 text-black absolute right-5 text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default News;
