import React, { useState } from "react";
import Register from "../../features/auth/register";
import Login from "../../features/auth/Login";

const LoginRegister = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const content = isLoginPage ? (
    <Login setIsLoginPage={setIsLoginPage} />
  ) : (
    <Register setIsLoginPage={setIsLoginPage} />
  );
  return content;
};

export default LoginRegister;
