import React from "react";
import { cn } from "../../utils/cn.js";

const HorizontalVideoCard = () => {
  return (
    <>
      <div className={cn("relative h-56 w-96 shrink-0")}>
        <img
          className={cn("h-full w-full")}
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

      <div className={cn("flex w-2/3 flex-col p-4 bg-gray-800 text-white ")}>
        <h2 className={cn("text-lg font-semibold")}>
          JavaScript Fundamentals: Variables and Data Types
        </h2>
        <div className={cn("flex items-center text-sm")}>
          <span>10.3k Views</span>
          <span>·</span>
          <span>44 minutes ago</span>
        </div>
        <div className={cn("flex items-center text-sm")}>
          <img
            className={cn("object-cover w-12 h-12 rounded-full")}
            src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Creator"
          />
          <span className={cn("text-sm font-medium mt-1")}>Code Master</span>
        </div>
        <div>
          <h3 className={cn("text-lg font-semibold")}>
            Learn how to build dynamic and interactive user interfaces with
            React and the D3.js data visualization library.
          </h3>
        </div>
      </div>
    </>
  );
};

export default HorizontalVideoCard;
