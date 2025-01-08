"use client";

import React, { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { AuthContext } from "../store/AuthContextProvider";
import { toast } from "react-toastify";
import Loader from "../assets/svg/Loader.jsx";

const SignupPage = () => {
  const { setIsAuthenticated, setToken, setAgentId } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFileChange = (e, setFile) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !username || !password || !fullName) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("fullName", fullName);
    if (avatar) formData.append("avatar", avatar);
    if (coverImage) formData.append("coverImage", coverImage);
    setLoading(true);
    const response = await postData(`users/register`, "", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (
      response?.data?.success &&
      (response?.status === 200 || response?.status === 201)
    ) {
      toast.success("Signup successful! Please log in.");
      // const accessToken = response?.data?.data?.accessToken;
      // const refreshToken = response?.data?.data?.refreshToken;
      // setToken({
      //   accessToken: accessToken,
      //   refreshToken: refreshToken,
      // });
      // sessionStorage?.setItem(
      //   "token",
      //   JSON.stringify({
      //     accessToken: accessToken,
      //     refreshToken: refreshToken,
      //   })
      // );
      // setIsAuthenticated(true);
      // const userData = response?.data?.data?.user;
      // sessionStorage?.setItem("userData", JSON.stringify(userData));
      // setUserDetails(userData);
      // toast.success(response.data.message);
      // navigation("/");
    } else {
      setIsAuthenticated(false);
      toast.error(response?.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all">
      <div className="p-8">
        <div className="flex justify-center mb-6">
          <FaYoutube className="text-6xl text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Sign up for YouTube
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="cooluser123"
            />
          </div>
          <div>
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoMdEyeOff className="h-5 w-5" />
                ) : (
                  <IoMdEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="avatar"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Avatar
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setAvatar)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="coverImage"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Cover Image
            </label>
            <input
              id="coverImage"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setCoverImage)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? <Loader /> : null}
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
