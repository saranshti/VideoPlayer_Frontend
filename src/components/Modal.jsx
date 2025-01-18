import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    let html = document.querySelector("html");
    if (html) {
      if (isOpen) {
        html.style.overflowY = "hidden";
        const modal = document.querySelector("#modal");
        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0];
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement =
          focusableContent[focusableContent.length - 1];

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            onClose();
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;
          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        });

        firstFocusableElement?.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
      aria-labelledby="header-4a content-4a"
      aria-modal="true"
      tabIndex="-1"
      role="dialog"
    >
      <div
        ref={wrapperRef}
        className="flex max-h-[80vh] min-w-auto flex-col gap-4 overflow-hidden rounded bg-white p-1 text-slate-500 shadow-xl shadow-slate-700/10"
        id="modal"
        role="document"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
