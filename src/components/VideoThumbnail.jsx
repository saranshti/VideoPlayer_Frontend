import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Simple component that renders thumbnail url
 * @param {string} snapshot
 */
const ThumbnailImage = ({ snapshot }) => {
  return (
    <div className="react-thumbnail-generator">
      <img src={snapshot} alt="my video thumbnail" />
    </div>
  );
};

const VideoThumbnail = ({
  cors = false,
  width = 0,
  height = 0,
  renderThumbnail = true,
  snapshotAtTime = 2,
  thumbnailHandler,
  videoUrl,
}) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [seeked, setSeeked] = useState(false);
  const [snapshot, setSnapshot] = useState(false);
  const [suspended, setSuspended] = useState(false);

  const videoEl = useRef(null);
  const canvasEl = useRef(null);

  useEffect(() => {
    if (!cors && videoEl.current) {
      videoEl.current.setAttribute("crossOrigin", "Anonymous");
    }
  }, [cors]);

  useEffect(() => {
    if (!snapshot) {
      if (metadataLoaded && dataLoaded && suspended) {
        if (
          !videoEl.current.currentTime ||
          videoEl.current.currentTime < snapshotAtTime
        ) {
          videoEl.current.currentTime = snapshotAtTime;
        }

        if (seeked && !snapshot) {
          getSnapShot();
        }
      }
    }
  }, [metadataLoaded, dataLoaded, suspended, seeked, snapshot, snapshotAtTime]);

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.addEventListener("loadedmetadata", () =>
        setMetadataLoaded(true)
      );
      videoEl.current.addEventListener("loadeddata", () => setDataLoaded(true));
      videoEl.current.addEventListener("suspend", () => setSuspended(true));
      videoEl.current.addEventListener("seeked", () => setSeeked(true));
    }

    return () => {
      if (videoEl.current) {
        videoEl.current.removeEventListener("loadedmetadata", () =>
          setMetadataLoaded(true)
        );
        videoEl.current.removeEventListener("loadeddata", () =>
          setDataLoaded(true)
        );
        videoEl.current.removeEventListener("suspend", () =>
          setSuspended(true)
        );
        videoEl.current.removeEventListener("seeked", () => setSeeked(true));
      }
    };
  }, []);

  const getSnapShot = () => {
    try {
      const video = videoEl.current;
      const canvas = canvasEl.current;
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;

      const context = canvas.getContext("2d");
      if (!width || !height) {
        context.drawImage(video, 0, 0);
      } else {
        context.drawImage(video, 0, 0, width, height);
      }

      const thumbnail = canvas.toDataURL("image/png");

      video.src = ""; // stop video loading
      video.remove();
      canvas.remove();

      setSnapshot(thumbnail);

      if (thumbnailHandler) {
        thumbnailHandler(thumbnail);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="react-thumbnail-generator">
      {!snapshot ? (
        <div>
          <canvas
            className="block h-[100px] left-0 object-contain fixed top-0 w-[100px]"
            ref={canvasEl}
          ></canvas>
          <video
            muted
            className="block h-[1px] left-0 object-contain fixed top-0 w-[1px]"
            ref={videoEl}
            src={videoUrl}
          />
        </div>
      ) : (
        renderThumbnail && <ThumbnailImage snapshot={snapshot} />
      )}
    </div>
  );
};

VideoThumbnail.propTypes = {
  cors: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  renderThumbnail: PropTypes.bool,
  snapshotAtTime: PropTypes.number,
  thumbnailHandler: PropTypes.func,
  videoUrl: PropTypes.string.isRequired,
};

export default VideoThumbnail;
