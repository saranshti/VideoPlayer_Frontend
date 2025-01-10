import React, { useEffect, useState } from "react";
import HorizontalVideoCard from "../components/VideoCard/HorizontalVideoCard";
import { cn } from "../utils/cn";
import { getData } from "../utils/apiConfig";
import Loader from "../assets/svg/Loader";
import { toast } from "react-toastify";

const VideoListingHorizontal = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllVideo = async () => {
    setLoading(true);
    const response = await getData(`video/video-get`);

    if (
      response?.data?.success &&
      (response?.status === 200 || response?.status === 201)
    ) {
      setVideoData(response?.data?.data);
    } else {
      setVideoData([]);
      toast.error(response?.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllVideo();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center">
        <Loader className="w-20 h-20" />
      </div>
    );
  }
  return (
    <div className={cn(`flex flex-col gap-4 bg-gray-800`)}>
      {videoData.map((video) => (
        <div key={video?._id} className={cn("flex flex-row w-full")}>
          <HorizontalVideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoListingHorizontal;
