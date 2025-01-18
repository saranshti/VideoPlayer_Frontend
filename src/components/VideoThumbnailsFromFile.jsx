import { useEffect } from "react";
import useVideoThumbnailForm from "../hooks/useVideoThumbnailForm";
import Upload from "../assets/svg/Upload.jsx";
import { base64ToBlob } from "../utils/utilsFunction.js";

const VideoThumbnailsFromFile = ({
  setThumbnail,
  setFile,
  setVideoFileName,
  setVideoSize,
}) => {
  const {
    inputUrl,
    handleGenerateThumbnails,
    handleNumberOfThumbnails,
    handleInputFileChange,
    isError,
    selectedThumbnail,
    setSelectedThumbnail,
    thumbnails,
  } = useVideoThumbnailForm({
    maxThumbnails: 20,
    type: "file",
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
      setVideoFileName(selectedFile.name);
      setVideoSize(selectedFile.size);

      // setError(null); // Clear any previous error
    } else {
      console.error("Please select a valid video file.");

      // setError("");
    }
  };

  useEffect(() => {
    if (inputUrl) {
      handleNumberOfThumbnails(1);
      handleGenerateThumbnails();
    }
  }, [inputUrl]);

  useEffect(() => {
    if (selectedThumbnail) {
      const base64Data = selectedThumbnail.split(",")[1]; // Extract base64 part
      const mimeType = "image/jpeg"; // Set the MIME type based on your image type (jpeg, png, etc.)

      // Convert base64 to Blob
      const blob = base64ToBlob(base64Data, mimeType);

      // Now pass the Blob to the parent component
      setThumbnail(blob); // Pass the Blob (not base64 string) to the parent component
    }
  }, [selectedThumbnail]);

  useEffect(() => {
    if (thumbnails && thumbnails?.length > 0) {
      setSelectedThumbnail(thumbnails[0]);
    }
  }, [thumbnails]);
  return (
    <div className="fromfile">
      <div className="w-full border-2 border-dashed px-4 py-12 text-center">
        {selectedThumbnail ? (
          <img src={selectedThumbnail} alt="thumbnails" className="w-full" />
        ) : (
          <>
            <span className="mb-4 inline-block w-24 rounded-full bg-[#E4D3FF] p-4 text-[#AE7AFF]">
              <Upload />
            </span>
            <h6 className="mb-2 font-semibold">
              Drag and drop video files to upload
            </h6>
            <p className="text-gray-400">
              Your videos will be private until you publish them.
            </p>
            <label
              htmlFor="upload-video-1"
              className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
            >
              Select Files
              <input
                type="file"
                onChange={(e) => {
                  handleInputFileChange(e);
                  handleFileChange(e);
                }}
                id="upload-video-1"
                accept="video/*"
                className="sr-only" // Hidden but functional
              />
            </label>
          </>
        )}
      </div>
      <button onClick={() => setSelectedThumbnail(null)}>Clear</button>
    </div>
  );
};

export default VideoThumbnailsFromFile;
