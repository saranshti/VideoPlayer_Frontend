import React from "react";
import LikedVideo from "../assets/svg/LikedVideo";
import DisLike from "../assets/svg/DisLike";
import Check from "../assets/svg/Check";
import Subscribers from "../assets/svg/Subscribers";
import VideoSave from "../assets/svg/VideoSave";
import VideoDetailVideoCard from "../components/VideoCard/VideoDetailVideoCard";

const VideoDetailPage = () => {
  return (
    <div className="flex flex-row bg-gray-800 w-full gap-2">
      <div className="col-span-12 w-full">
        <div className="relative mb-4 w-full pt-[56%]">
          <div className="absolute inset-0">
            <video className="h-full w-full" controls="" autoPlay="" muted="">
              <source
                src="https://res.cloudinary.com/dfw5nnic5/video/upload/v1695117968/Sample_1280x720_mp4_b4db0s.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div
          className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
          role="button"
          tabIndex={0}
        >
          <div className="flex flex-wrap gap-y-2">
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <h1 className="text-lg font-bold text-white">
                Advanced React Patterns
              </h1>
              <p className="flex text-sm text-gray-200">
                30,164&nbsp;Views ·18 hours ago
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                <div className="flex overflow-hidden rounded-lg border">
                  <button
                    className="group/btn flex items-center text-white gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                    data-like={3050}
                    data-like-alt={3051}
                  >
                    <LikedVideo className="h-4 w-4" />
                  </button>
                  <button
                    className="group/btn flex items-center text-white gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                    data-like={20}
                    data-like-alt={21}
                  >
                    <DisLike className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative block">
                  <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                    <span className="inline-block w-5">
                      <VideoSave className="h-5 w-5" />
                    </span>
                    Save
                  </button>
                  <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg text-white bg-gray-800 p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                    <h3 className="mb-4 text-center text-lg font-semibold">
                      Save to playlist
                    </h3>
                    <ul className="mb-4">
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="Collections-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="Collections-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          Collections
                        </label>
                      </li>
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="JavaScript Basics-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="JavaScript Basics-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          JavaScript Basics
                        </label>
                      </li>
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="C++ Tuts-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="C++ Tuts-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          C++ Tuts
                        </label>
                      </li>
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="Feel Good Music-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="Feel Good Music-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          Feel Good Music
                        </label>
                      </li>
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="Ed Sheeran-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="Ed Sheeran-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          Ed Sheeran
                        </label>
                      </li>
                      <li className="mb-2 last:mb-0">
                        <label
                          className="group/label inline-flex cursor-pointer items-center gap-x-3"
                          htmlFor="Python-checkbox"
                        >
                          <input
                            type="checkbox"
                            className="peer hidden"
                            id="Python-checkbox"
                          />
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                            <Check className="h-3 w-3" />
                          </span>
                          Python
                        </label>
                      </li>
                    </ul>
                    <div className="flex flex-col">
                      <label
                        htmlFor="playlist-name"
                        className="mb-1 inline-block cursor-pointer"
                      >
                        Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                        id="playlist-name"
                        placeholder="Enter playlist name"
                      />
                      <button className="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                        Create new playlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="mt-2 h-12 w-12 shrink-0">
                <img
                  src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="reactpatterns"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="text-gray-200">React Patterns</p>
                <p className="text-sm text-gray-400">757K Subscribers</p>
              </div>
            </div>
            <div className="block">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium text-black bg-emerald-300 rounded hover:bg-emerald-400 focus:outline-none">
                <Subscribers className="h-5 w-5 text-black" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
          <hr className="my-4 border-white" />
          <div className="h-5 overflow-hidden group-focus:h-auto">
            <p className="text-sm text-white">
              🚀 Dive into the world of React with our latest tutorial series:
              "Advanced React Patterns"! 🛠️ Whether you're a seasoned developer
              or just starting out, this series is designed to elevate your
              React skills to the next level.
            </p>
          </div>
        </div>
        <button className="peer w-full rounded-lg border p-4 text-left text-white duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
          <h6 className="font-semibold text-white">573 Comments...</h6>
        </button>
        <div className="fixed inset-x-0 text-white top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-gray-800 p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
          <div className="block">
            <h6 className="mb-4 font-semibold">573 Comments</h6>
            <input
              type="text"
              className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
              placeholder="Add a Comment"
            />
          </div>
          <hr className="my-4 border-white" />
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="sarahjv"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Sarah Johnson&nbsp;·&nbsp;
                  <span className="text-sm">17 hour ago</span>
                </p>
                <p className="text-sm text-gray-200">@sarahjv</p>
                <p className="mt-3 text-sm">
                  This series is exactly what I've been looking for! Excited to
                  dive into these advanced React patterns. Thanks for putting
                  this together!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="mikerod"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Michael Rodriguez&nbsp;·&nbsp;
                  <span className="text-sm">5 minutes ago</span>
                </p>
                <p className="text-sm text-gray-200">@mikerod</p>
                <p className="mt-3 text-sm">
                  Render props have always been a bit tricky for me. Can't wait
                  to see how this series breaks it down. Thanks for sharing!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="emilyt"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Emily Turner&nbsp;·&nbsp;
                  <span className="text-sm">1 hour ago</span>
                </p>
                <p className="text-sm text-gray-200">@emilyt</p>
                <p className="mt-3 text-sm">
                  Higher-order components have been a mystery to me for far too
                  long. Looking forward to demystifying them with this series.
                  Thanks!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="davidc"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  David Chen&nbsp;·&nbsp;
                  <span className="text-sm">3 hour ago</span>
                </p>
                <p className="text-sm text-gray-200">@davidc</p>
                <p className="mt-3 text-sm">
                  Compound components are a game-changer for UI development.
                  Can't wait to learn more about them. Great work on this
                  series!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="alex_p"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Alex Parker&nbsp;·&nbsp;
                  <span className="text-sm">12 hour ago</span>
                </p>
                <p className="text-sm text-gray-200">@alex_p</p>
                <p className="mt-3 text-sm">
                  Controlled vs. uncontrolled components - finally! This topic
                  has always confused me. Thanks for breaking it down!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="jessicalee"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Jessica Lee&nbsp;·&nbsp;
                  <span className="text-sm">5 hour ago</span>
                </p>
                <p className="text-sm text-gray-200">@jessicalee</p>
                <p className="mt-3 text-sm">
                  This series is a goldmine for React developers! Compound
                  components are something I've been eager to master. Thanks for
                  this!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="ryanjax"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Ryan Jackson&nbsp;·&nbsp;
                  <span className="text-sm">Just now</span>
                </p>
                <p className="text-sm text-gray-200">@ryanjax</p>
                <p className="mt-3 text-sm">
                  This is exactly what I needed to take my React skills to the
                  next level. Looking forward to diving into the render props
                  section!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
          <div>
            <div className="flex gap-x-4">
              <div className="mt-2 h-11 w-11 shrink-0">
                <img
                  src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="lauraw"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="flex items-center text-gray-200">
                  Laura Williams&nbsp;·&nbsp;
                  <span className="text-sm">1 minutes ago</span>
                </p>
                <p className="text-sm text-gray-200">@lauraw</p>
                <p className="mt-3 text-sm">
                  This series looks amazing! I'm especially excited to learn
                  more about controlled vs. uncontrolled components. Thanks for
                  sharing!
                </p>
              </div>
            </div>
            <hr className="my-4 border-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-1/3 shrink-0">
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
        <VideoDetailVideoCard />
      </div>
    </div>
  );
};

export default VideoDetailPage;
