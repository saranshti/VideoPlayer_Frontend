import React, { useState } from "react";
import UploadVideo from "../components/UploadVideo";
import Modal from "../components/Modal";

const VideoUpload = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none"
      >
        Create New Video
      </button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <UploadVideo />
      </Modal>
    </div>
  );
};

export default VideoUpload;
