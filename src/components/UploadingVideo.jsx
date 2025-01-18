import React from "react";
import Movie from "../assets/svg/Movie";
import Loader from "../assets/svg/Loader";

const UploadingVideo = ({ videoSize, videoFileName, progress }) => {
  return (
    <div className="w-full max-w-lg overflow-auto rounded-lg text-white border border-gray-700 bg-[#121212] p-4">
      <div className="mb-4 flex items-start justify-between">
        <h2 className="text-xl font-semibold">
          Uploading Video...
          <span className="block text-sm text-gray-300">
            Track your video uploading process.
          </span>
        </h2>
        <button className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mb-6 flex gap-x-2 border p-3">
        <div className="w-8 shrink-0">
          <span className="inline-block w-full rounded-full bg-[#E4D3FF] p-1 text-[#AE7AFF]">
            <Movie />
          </span>
        </div>
        <div className="flex flex-col">
          <h6>{videoFileName}</h6>
          <p className="text-sm">{Math.ceil(videoSize / (1024 * 1024))} Mb</p>
          <div className="mt-2 flex items-center">
            {progress < 100 ? (
              <>
                <Loader /> {progress}% Uploading...
              </>
            ) : (
              <>✅ {progress}% Uploaded</>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="border px-4 py-3">Cancel</button>
        <button
          className="bg-[#ae7aff] px-4 py-3 text-black disabled:bg-[#E4D3FF]"
          disabled=""
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default UploadingVideo;
