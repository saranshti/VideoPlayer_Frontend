import React, { useState } from "react";
import Switch from "../components/Switch";
import VideoListingHorizontal from "../components/VideoListingHorizontal";
import VideoListingGrid from "../components/VideoListingGrid";
const History = () => {
  const [listType, setListType] = useState("grid");
  return (
    <div>
      <Switch setListType={setListType} />
      {listType === "grid" ? <VideoListingGrid /> : <VideoListingHorizontal />}
    </div>
  );
};

export default History;
