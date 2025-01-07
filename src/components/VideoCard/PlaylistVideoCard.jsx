import React from "react";
import { cn } from "../../utils/cn.js";

const PlaylistVideoCard = () => {
  return (
    <div className={cn("flex flex-col w-full dark:bg-gray-800")}>
      <div className={cn("relative aspect-w-16 aspect-h-9")}>
        <img
          className={cn("object-cover w-full h-full")}
          src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
        <div
          className={cn(
            "absolute bottom-0 w-full h-20 bg-black border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40"
          )}
        >
          <div class="relative z-[1]">
            <p class="flex justify-between">
              <span class="inline-block text-white">Playlist</span>
              <span class="inline-block text-white">12&nbsp;videos</span>
            </p>
            <p class="text-sm text-white">100K Views&nbsp;·&nbsp;2 hours ago</p>
          </div>
        </div>
      </div>

      <div className={cn("flex p-2 bg-black text-white dark:bg-gray-800")}>
        <div className={cn("flex flex-col justify-between w-full")}>
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

export default PlaylistVideoCard;
