import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./store/AuthContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setToken,
    setAgentId,
    setUserDetails,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const encryptedToken = sessionStorage?.getItem("token");
    const encryptedAgentId = true || sessionStorage?.getItem("userData");
    const encryptedUserDetails = sessionStorage?.getItem("userData");

    if (encryptedToken && encryptedAgentId && encryptedUserDetails) {
      const token = encryptedToken;
      // const agentId = decryptId(encryptedAgentId);
      const agentId = true;
      const userDetails = encryptedUserDetails;
      setLoading(false);
      setIsAuthenticated(true);
      setToken(token);
      setAgentId(agentId);
      setUserDetails({ ...JSON.parse(userDetails) }); // Store the token in your AuthContext
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [setIsAuthenticated, setToken]);

  return (
    <>
      <ToastContainer />
      <div className="w-full">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : isAuthenticated ? (
          <Layout />
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
};

export default App;
