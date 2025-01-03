import { Route, Routes } from "react-router-dom";
import ChannelPage from "./ChannelPage";
import VideoDetailPage from "./VideoDetailPage";
import VideoListingGrid from "./VideoListingGrid";
import VideoListingHorizontal from "./VideoListingHorizontal";
// import LoginPage from "../pages/LoginPage";

const AllRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<VideoListingGrid />} />
        <Route path="/channelPage" element={<ChannelPage />} />
        <Route path="/videoDetailPage" element={<VideoDetailPage />} />
        <Route path="/videoListingGrid" element={<VideoListingGrid />} />
        <Route
          path="/videoListingHorizontal"
          element={<VideoListingHorizontal />}
        />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
