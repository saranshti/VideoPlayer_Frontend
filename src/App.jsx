import Layout from "./components/Layout";
// import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // const { isAuthenticated, setIsAuthenticated, setToken, setAgentId, setUserDetails} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const encryptedToken = sessionStorage?.getItem('token');
  //   const encryptedAgentId = sessionStorage?.getItem('agentId');
  //   const encryptedAgentDetails = sessionStorage?.getItem('agentDetails');

  //   if (encryptedToken && encryptedAgentId && encryptedAgentDetails) {
  //     const token = decryptId(encryptedToken);
  //     const agentId = decryptId(encryptedAgentId);
  //     const agentDetails = decryptId(encryptedAgentDetails);
  //     setLoading(false);
  //     setIsAuthenticated(true);
  //     setToken(token);
  //     setAgentId(agentId);
  //     setUserDetails({...JSON.parse(agentDetails)})// Store the token in your AuthContext
  //   } else {
  //     setIsAuthenticated(false);
  //     setLoading(false);
  //   }
  // }, [setIsAuthenticated, setToken]);
  const isAuthenticated = false;

  return (
    <>
      <ToastContainer />
      <div className="w-full">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : isAuthenticated ? (
          <Layout />
        ) : (
          <SignupPage />
        )}
      </div>
    </>
  );
};

export default App;
