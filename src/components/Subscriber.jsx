import React from "react";

const Subscriber = () => {
  return (
    <div className="flex gap-3 py-4 dark:text-white">
      <div className="h-14 w-14 shrink-0">
        <img
          src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
          alt="React Patterns"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="flex w-full dark:text-white justify-center items-center">
        <p className="text-lg">Saransh Tiwari</p>
      </div>
    </div>
  );
};

export default Subscriber;
