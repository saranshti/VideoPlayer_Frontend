import React, { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { postData } from "../utils/apiConfig.js";
import { AuthContext } from "../store/AuthContextProvider.jsx";
// import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/svg/Loader.jsx";

const LoginPage = () => {
  const { setIsAuthenticated, setToken, setUserDetails } =
    useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      return;
    }
    setLoading(true);
    const response = await postData(`users/login`, "", {
      email: userId,
      password: password,
    });

    if (
      response?.data?.success &&
      (response?.status === 200 || response?.status === 201)
    ) {
      const accessToken = response?.data?.data?.accessToken;
      const refreshToken = response?.data?.data?.refreshToken;
      setToken({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      sessionStorage?.setItem(
        "token",
        JSON.stringify({
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
      );
      setIsAuthenticated(true);
      const userData = response?.data?.data?.user;
      sessionStorage?.setItem("userData", JSON.stringify(userData));
      setUserDetails(userData);
      toast.success(response.data.message);
      navigation("/");
    } else {
      console.log("first", response);
      setIsAuthenticated(false);
      toast.error(response?.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-red-100 to-red-200 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <FaYoutube className="text-6xl text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Welcome to YouTube
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
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
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="you@example.com"
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
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? <Loader /> : null}
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a href="#" className="font-medium text-red-600 hover:text-red-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
