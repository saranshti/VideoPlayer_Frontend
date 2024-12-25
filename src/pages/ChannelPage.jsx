import React from "react";
import { cn } from "../utils/cn";
import Subscribers from "../assets/svg/Subscribers";
import Tabs from "../components/Tabs";
const ChannelPage = () => {
  return (
    <div className="flex flex-col border border-red-500">
      <div className="flex flex-col h-1/2 border border-red-500">
        <div className={cn("relative w-full h-2/3 flex-shrink-0")}>
          <img
            className={cn("w-full h-52 object-cover")}
            src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
        </div>
        <img
          className={cn(
            "absolute h-24 w-24 object-cover rounded-full ml-4 mt-44 border-2 border-white"
          )}
          src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
        <div className="flex flex-row justify-between">
          <div className={cn("ml-32 flex flex-col justify-between w-full")}>
            <h2 className={cn("text-lg font-semibold")}>React Patterns</h2>
            <span className={cn("text-sm font-medium mt-1")}>
              @reactPatterns
            </span>
            <div className={cn("flex items-center text-sm")}>
              <span className={cn("mr-2")}>600k Subscribers</span>
              <span>·</span>
              <span className={cn("ml-2")}>220 Subscribed</span>
            </div>
          </div>
          <button className="mt-4 mr-12 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <Subscribers className="h-10 w-10 color-black" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col h-1/2">
        <Tabs />
      </div>
    </div>
  );
};

export default ChannelPage;
