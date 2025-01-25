import React from "react";
import LikedVideo from "../assets/svg/LikedVideo";
import DisLike from "../assets/svg/DisLike";

const LikeDisLike = () => {
  return (
    <div className="flex overflow-hidden rounded-lg border">
      <button
        className="group/btn flex items-center text-white gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
        data-like={3050}
        data-like-alt={3051}
        onClick={() => {}}
      >
        <LikedVideo className="h-4 w-4" />
      </button>
      <button
        className="group/btn flex items-center text-white gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
        data-like={20}
        data-like-alt={21}
        onClick={() => {}}
      >
        <DisLike className="h-4 w-4" />
      </button>
    </div>
  );
};

export default LikeDisLike;
