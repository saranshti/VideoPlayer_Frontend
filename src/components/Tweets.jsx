import React from "react";
import LikedVideo from "../assets/svg/LikedVideo.jsx";
import DisLike from "../assets/svg/DisLike.jsx";

const Tweets = () => {
  return (
    <div className="flex gap-3 border-b border-gray-600 py-4 dark:text-white">
      <div className="h-14 w-14 shrink-0">
        <img
          src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
          alt="React Patterns"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="w-full dark:text-white">
        <h4 className="mb-1 flex items-center gap-x-2">
          <span className="font-semibold">React Patterns</span>&nbsp;
          <span className="inline-block text-sm text-gray-400">
            5 hours ago
          </span>
        </h4>
        <p className="mb-2">
          Exploring the latest features in JavaScript ES11! The language keeps
          evolving. 💡 #JavaScript #ES11 Exploring the latest features in
          JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11
          Exploring the latest features in JavaScript ES11! The language keeps
          evolving. 💡 #JavaScript #ES11
        </p>
        <div className="flex gap-4">
          <button
            className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
            data-like-count="425"
            data-like-count-alt="424"
          >
            <LikedVideo className="h-5 w-5" />
          </button>
          <button
            className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
            data-dislike-count="425"
            data-dislike-count-alt="424"
          >
            <DisLike className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
