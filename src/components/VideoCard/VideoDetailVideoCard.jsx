import React from "react";
import { getTimeDifference } from "../../utils/utilsFunction.js";
const VideoDetailVideoCard = ({ video }) => {
  return (
    <>
      <div className="w-full gap-x-2 border pr-2 md:flex">
        <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
          <div className="w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src={video?.thumbnail}
                alt={video?.title}
                className="h-full w-full"
              />
            </div>
            <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm text-white">
              {video?.duration}
            </span>
          </div>
        </div>
        <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
          <div className="w-full pt-1 md:pt-0">
            <h6 className="mb-1 text-sm font-semibold text-white">
              {video?.title}
            </h6>
            <p className="mb-0.5 mt-2 text-sm text-gray-200">
              {video?.owner?.fullName}
            </p>
            <p className="flex text-sm text-gray-200">
              {video?.views}&nbsp;Views · {getTimeDifference(video?.createdAt)}{" "}
              ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailVideoCard;
