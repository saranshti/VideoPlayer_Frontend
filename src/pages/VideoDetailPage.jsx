import React from "react";
import LikedVideo from "../assets/svg/LikedVideo";
import DisLike from "../assets/svg/DisLike";

const VideoDetailPage = () => {
  return (
    <div className="flex flex-row bg-gray-800 w-full">
      <div className="flex flex-col bg-gray-800 w-full p-3">
        <div></div>
        <div className="flex flex-col border-2 rounded-xl bg-gray-800 justify-between">
          <div className="flex flex-row justify-between bg-gray-800 p-3">
            <div className="flex flex-col bg-gray-800 text-white">
              <h3 className="text-lg font-semibold bg-gray-800">
                Advanced React Patterns
              </h3>
              <div className="flex items-center text-sm bg-gray-800">
                <span className="mr-2">30,164 Views</span>
                <span>·</span>
                <span className="ml-2">18 hours ago</span>
              </div>
            </div>
            <div>
              <div className="flex flex-row border-2 border-white rounded-xl space-x-4 bg-gray-800 p-3">
                <div className="flex flex-row text-white bg-gray-800">
                  <LikedVideo className="h-5 w-5" />
                  <span>3050</span>
                </div>
                <div className="flex flex-row text-white bg-gray-800">
                  <DisLike className="h-5 w-5" />
                  <span>3050</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoDetailPage;
