/**
 * @description
 * Convert an Asset File to object URI for better performance
 * - A user can use this url as a resource url
 *      - For example it can be used as src of image, video tag.
 *
 * Refer to this link for more detailed information
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
 *
 * @ref https://github.com/Rajesh-Royal/vThumb.js
 *
 * @param {File} file  The video file
 * @param {boolean} revoke If true the object uri will be removed after its creation
 * @returns {string} window object url ex. https://blob:video58699
 *
 */

export const importFileandPreview = (file, revoke) => {
  return new Promise((resolve, reject) => {
    window.URL = window.URL || window.webkitURL;
    let preview = window.URL.createObjectURL(file);
    // remove reference
    if (revoke) {
      window.URL.revokeObjectURL(preview);
    }
    setTimeout(() => {
      resolve(preview);
    }, 100);
  });
};

/**
 * @description
 * This callback handles response for each thumbnail assyncronously.
 *
 * @callback generateVideoCallback
 * @param {string} thumbnail
 * @param {number} index
 */

/**
 * @description
 * Idea taken from - https://codepen.io/aertmann/pen/mrVaPx
 * The original functionality of getVideoThumbnail() function is customized as per working code
 * If it didn't work in future then replace it with about links working example
 *
 * @param {File} videoFile The video file
 * @param {number} numberOfThumbnails Number of thumbnails you want to generate
 * @param {generateVideoCallback} cb This callback handles response for each thumbnail assyncronously.
 * @returns {string[]} An array of `base64` images
 *
 */
export const generateVideoThumbnails = async (
  videoFile,
  numberOfThumbnails,
  type,
  cb
) => {
  let thumbnail = [];
  let fractions = [];

  return new Promise(async (resolve, reject) => {
    if (type === "file") {
      if (!videoFile.type?.includes("video")) {
        reject("not a valid video file");
      }
    }

    await getVideoDurationFromVideoFile(videoFile)
      .then(async (duration) => {
        // divide the video timing into particular timestamps in respective to number of thumbnails
        // ex if time is 10 and numOfthumbnails is 4 then result will be -> 0, 2.5, 5, 7.5 ,10
        // we will use this timestamp to take snapshots
        for (let i = 0; i <= duration; i += duration / numberOfThumbnails) {
          fractions.push(Math.floor(i));
        }

        let promiseArray = fractions.map(async (time, index) => {
          const res = await getVideoThumbnail(
            videoFile,
            index >= fractions.length - 1 ? time - 2 : time
          );

          if (cb) cb(res, index);
          return Promise.resolve(res);
        });

        await Promise.all(promiseArray)
          .then((res) => {
            res.forEach((res) => {
              thumbnail.push(res);
            });
            resolve(thumbnail);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => resolve(thumbnail));
      })
      .catch((err) => {
        reject(err);
      });
    reject("something went wrong");
  });
};

/**
 * @description
 * This function takes an VideoFile and Timeframe as an Input and returns the `base64` image of that particular timeFrame of video.
 * - It create video element and play it at the given time then,
 * - Create an svg element and draws the current frame of video on to svg.
 * - This svg then get converted to dataURI and sent as response.
 *
 * @param {File} file The video file
 * @param {number} videoTimeInSeconds Timeframe of video [at this particular time the thumbnail will be generated]
 * @returns {string} Returns an Array of `base64` Images
 */
const getVideoThumbnail = (file, videoTimeInSeconds) => {
  return new Promise((resolve, reject) => {
    if (file?.type?.match("video")) {
      importFileandPreview(file).then((urlOfFIle) => {
        getVideoCover(urlOfFIle, videoTimeInSeconds).then((res) => {
          resolve(res);
        });
      });
    } else if (file) {
      getVideoCover(file, videoTimeInSeconds)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject("file not valid");
    }
  });
};

/**
 * @ref - https://stackoverflow.com/questions/23640869/create-thumbnail-from-video-file-via-file-input
 *
 * @param {string} urlOfFIle
 * @param {number} seekTo - sktip to the frame by default
 * @returns {string} base64 image string
 */
export const getVideoCover = (urlOfFIle, seekTo = 0.0) => {
  return new Promise((resolve, reject) => {
    try {
      // load the file to a video player
      const videoPlayer = document.createElement("video");
      // videoPlayer.setAttribute('src', URL.createObjectURL(urlOfFIle));
      videoPlayer.setAttribute("src", urlOfFIle);
      videoPlayer.crossOrigin = "Anonymous";
      videoPlayer.load();
      videoPlayer.addEventListener("error", (ex) => {
        reject(`error when loading video file ${ex}`);
      });
      // load metadata of the video to get video duration and dimensions
      videoPlayer.addEventListener("loadedmetadata", () => {
        // seek to user defined timestamp (in seconds) if possible
        if (videoPlayer.duration < seekTo) {
          reject("video is too short.");
          return;
        }
        // delay seeking or else 'seeked' event won't fire on Safari
        setTimeout(() => {
          videoPlayer.currentTime = seekTo;
        }, 200);
        // extract video thumbnail once seeking is complete
        videoPlayer.addEventListener("seeked", () => {
          // console.log('video is now paused at %ss.', seekTo);
          // define a canvas to have the same dimension as the video
          const canvas = document.createElement("canvas");
          canvas.width = videoPlayer.videoWidth;
          canvas.height = videoPlayer.videoHeight;
          // draw the video frame to canvas
          const ctx = canvas.getContext("2d");
          ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
          // return the canvas image as a blob
          // then convert it to base 64
          ctx.canvas.toBlob(
            (blob) => {
              var reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = function () {
                var base64data = reader.result;
                resolve(base64data);
              };
            },
            "image/jpeg",
            1 /* quality */
          );
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @param {File} videoFile The video file
 * @returns {number} The duration of the video in seconds
 */
export const getVideoDurationFromVideoFile = (videoFile) => {
  return new Promise((resolve, reject) => {
    try {
      if (videoFile) {
        if (videoFile?.type?.match("video")) {
          importFileandPreview(videoFile).then((url) => {
            generateVideoDurationFromUrl(url).then((res) => {
              resolve(res);
            });
          });
        } else {
          generateVideoDurationFromUrl(videoFile).then((res) => {
            resolve(res);
          });
        }
      } else {
        reject("Cannot generate video duration for this video file.");
      }
    } catch (error) {
      reject(error);
    }
  });
};

// generate the video duration either via url
const generateVideoDurationFromUrl = (url) => {
  return new Promise((resolve, reject) => {
    let video = document.createElement("video");
    video.addEventListener("loadeddata", function () {
      resolve(video.duration);
      window.URL.revokeObjectURL(url);
    });
    video.preload = "metadata";
    video.src = url;
    // Load video in Safari / IE11
    video.muted = true;
    video.crossOrigin = "Anonymous";
    video.playsInline = true;
    video.play();
  });
};
