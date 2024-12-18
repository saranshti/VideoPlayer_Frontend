import React from "react";
import { cn } from "../../utils/cn.js";

const VideoCard = () => {
  // aspect ratio used for images
  return (
    <div className={cn("flex flex-col w-full")}>
      <div className={cn("relative aspect-w-16 aspect-h-9")}>
        <img
          className={cn("object-cover w-full h-full")}
          src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
        <div
          className={cn(
            "absolute bottom-1 right-1 rounded-lg p-1 bg-black text-white"
          )}
        >
          17:16
        </div>
      </div>

      <div className={cn("flex p-4 bg-black text-white")}>
        {/* Profile Picture */}
        <div className={cn("flex-shrink-0")}>
          <img
            className={cn("object-cover w-12 h-12 rounded-full")}
            src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Creator"
          />
        </div>

        {/* Video Details */}
        <div className={cn("ml-4 flex flex-col justify-between w-full")}>
          <h2 className={cn("text-lg font-semibold")}>
            JavaScript Fundamentals: Variables and Data Types
          </h2>
          <div className={cn("flex items-center text-sm")}>
            <span className={cn("mr-2")}>10.3k Views</span>
            <span>·</span>
            <span className={cn("ml-2")}>44 minutes ago</span>
          </div>
          <span className={cn("text-sm font-medium mt-1")}>Code Master</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
