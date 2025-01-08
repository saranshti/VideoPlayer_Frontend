import React from "react";
import Tabs from "../components/Tabs";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AuthenticationPage = () => {
  const tabs = [
    {
      id: "tab-1",
      label: "Login",
      content: <LoginPage />,
    },
    {
      id: "tab-2",
      label: "SignUp",
      content: <SignupPage />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 p-4 dark:bg-gray-800">
      <div className="w-full max-w-md">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default AuthenticationPage;
