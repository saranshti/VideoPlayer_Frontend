import { Route, Routes } from "react-router-dom";
import ChannelPage from "./ChannelPage";
import VideoDetailPage from "./VideoDetailPage";
import VideoListingGrid from "./VideoListingGrid";
import VideoListingHorizontal from "./VideoListingHorizontal";
import TermsAndConditionPage from "./TermsAndConditionPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ChannelPlaylistVideosPage from "./ChannelPlaylistVideosPage";

const AllRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<VideoListingGrid />} />
        <Route path="/channel" element={<ChannelPage />} />
        <Route path="/video-detail" element={<VideoDetailPage />} />
        <Route path="/video-listing-grid" element={<VideoListingGrid />} />
        <Route
          path="/video-listing-horizontal"
          element={<VideoListingHorizontal />}
        />
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
