import React from "react";
import { cn } from "../utils/cn";
import VideoCard from "../components/VideoCard/VideoCard";

const VideoListingGrid = () => {
  const videoCards = new Array(100).fill(null);
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-black`
      )}
    >
      {videoCards.map((_, index) => (
        <div key={index} className="flex">
          <VideoCard />
        </div>
      ))}
    </div>
  );
};

export default VideoListingGrid;
