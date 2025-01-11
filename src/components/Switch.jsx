import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";

export default function Switch({ setListType }) {
  // Manage the checked state of the switch
  const [isChecked, setIsChecked] = useState(false);

  // Toggle the state when the switch is clicked
  const handleSwitchToggle = () => {
    setIsChecked(!isChecked);
    setListType(isChecked ? "grid" : "list");
  };

  return (
    <>
      {/* Switch container */}
      <div className="relative inline-flex items-center rounded-full bg-slate-100 mb-2">
        <input
          className="peer hidden"
          type="checkbox"
          checked={isChecked}
          onChange={handleSwitchToggle} // Use onChange to handle toggle
          id="id-c0010"
        />
        {/* Grid view label */}
        <label
          className={`inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-colors ${
            isChecked
              ? "bg-transparent text-slate-500"
              : "bg-emerald-500 text-white"
          }`}
          htmlFor="id-c0010"
          onClick={() => {
            if (!isChecked) {
              handleSwitchToggle();
            }
          }}
        >
          <CiGrid41 />
        </label>
        {/* List view label */}
        <label
          className={`inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-colors ${
            !isChecked
              ? "bg-transparent text-slate-500"
              : "bg-emerald-500 text-white"
          }`}
          htmlFor="id-c0010"
          onClick={() => {
            if (isChecked) {
              handleSwitchToggle();
            }
          }}
        >
          <CiCircleList />
        </label>
      </div>
    </>
  );
}
