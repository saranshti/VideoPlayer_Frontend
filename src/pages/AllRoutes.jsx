import { Route, Routes } from "react-router-dom";
import LikedVideo from "./LikedVideo";
import ChannelPage from "./ChannelPage";
import VideoDetailPage from "./VideoDetailPage";
import Home from "./Home";
import TermsAndConditionPage from "./TermsAndConditionPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ChannelPlaylistVideosPage from "./ChannelPlaylistVideosPage";

const AllRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked-video" element={<LikedVideo />} />
        <Route path="/channel" element={<ChannelPage />} />
        <Route path="/video-detail" element={<VideoDetailPage />} />
        {/* <Route path="/video-listing-grid" element={<VideoListingGrid />} /> */}
        {/* <Route
          path="/video-listing-horizontal"
          element={<VideoListingHorizontal />}
        /> */}
        <Route
          path="/terms-and-condition"
          element={<TermsAndConditionPage />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/channel-playlist-videos"
          element={<ChannelPlaylistVideosPage />}
        />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
