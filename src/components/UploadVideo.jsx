import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoThumbnailsFromFile from "./VideoThumbnailsFromFile";
import UploadingVideo from "./UploadingVideo";
import Modal from "./Modal";
import { convertSecondToMinuteandHour } from "../utils/utilsFunction.js";
import { getVideoDurationFromVideoFile } from "../utils/video-thumbnails-generator.js";

const UploadVideo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isPublished, setIsPublished] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [videoSize, setVideoSize] = useState(0);
  const [videoFileName, setVideoFileName] = useState("");

  const uploadVideo = async () => {
    if (!file) {
      setError("Please select a video file first.");
      return;
    }
    handleOpenModal();
    const durationTime = await getVideoDurationFromVideoFile(file);
    const duration = convertSecondToMinuteandHour(durationTime);
    const chunkSize = 10 * 1024 * 1024; // 10MB per chunk
    const totalChunks = Math.ceil(file.size / chunkSize);
    const originalFileName = file.name;

    setUploading(true);
    setProgress(0);

    let currentChunkIndex = 0;

    // Split the file into chunks and upload them one by one
    while (currentChunkIndex < totalChunks) {
      const chunkStart = currentChunkIndex * chunkSize;
      const chunkEnd = Math.min(chunkStart + chunkSize, file.size);
      const chunk = file.slice(chunkStart, chunkEnd);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", "this is the description");
      formData.append("isPublished", true);
      formData.append("duration", duration);
      formData.append("video", chunk);
      formData.append(
        "thumbnail",
        currentChunkIndex === totalChunks - 1 ? thumbnail : ""
      );
      formData.append("chunk", currentChunkIndex);
      formData.append("totalChunks", totalChunks);
      formData.append("originalname", originalFileName);

      const Server_Api_Url = import.meta.env.VITE_APP_SERVER_API;

      try {
        const response = await axios.post(
          `${Server_Api_Url}/video/video-create`,
          formData,
          {
            withCredentials: true, // Ensures cookies are sent along with the request
          }
        );

        if (response.status === 201 || response.status === 20) {
          // Calculate upload progress
          const uploadedPercentage = Math.round(
            ((currentChunkIndex + 1) / totalChunks) * 100
          );
          setProgress(uploadedPercentage);
        } else {
          setError(response.data.error || "Error uploading chunk");
          break;
        }
      } catch (error) {
        setError(
          "Error uploading chunk: " +
            (error.response ? error.response.data : error.message)
        );
        break;
      }

      currentChunkIndex++;
    }

    setUploading(false);
    alert("Video upload completed!");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <UploadingVideo
          videoSize={videoSize}
          videoFileName={videoFileName}
          progress={progress}
        />
      </Modal>
      <div className="h-full overflow-auto border text-white bg-[#121212]">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Upload Videos</h2>
          <button
            onClick={uploadVideo}
            className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
          >
            Save
          </button>
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
          <VideoThumbnailsFromFile
            setThumbnail={setThumbnail}
            setFile={setFile}
            setVideoFileName={setVideoFileName}
            setVideoSize={setVideoSize}
          />
          {/* <div className="w-full">
            <label htmlFor="thumbnail" className="mb-1 inline-block">
              Thumbnail<sup>*</sup>
            </label>
            <input
              id="thumbnail"
              type="file"
              className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
            />
          </div> */}
          <div className="w-full">
            <label htmlFor="title" className="mb-1 inline-block">
              Title<sup>*</sup>
            </label>
            <input
              id="title"
              type="text"
              className="w-full border bg-transparent px-2 py-1 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="desc" className="mb-1 inline-block">
              Description<sup>*</sup>
            </label>
            <textarea
              id="desc"
              className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
              defaultValue={""}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideo;
