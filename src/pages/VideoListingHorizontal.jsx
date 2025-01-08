import React from "react";
import HorizontalVideoCard from "../components/VideoCard/HorizontalVideoCard";
import { cn } from "../utils/cn";

const VideoListingHorizontal = () => {
  const videoCards = new Array(100).fill(null);
  return (
    <div className={cn(`flex flex-col gap-4 bg-gray-800`)}>
      {videoCards.map((_, index) => (
        <div key={index} className={cn("flex flex-row w-full")}>
          <HorizontalVideoCard />
        </div>
      ))}
    </div>
  );
};

export default VideoListingHorizontal;
