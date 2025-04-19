import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="flex gap-3 items-center  bg-gray-400 p-2 mt-4 ">
      <p className="bg-[#D72050]  px-3 py-1">Latest</p>
      <Marquee className="space-x-10" pauseOnHover={true} speed={80}>
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
      </Marquee>
    </div>
  );
};

export default Latest;
