import React from "react";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <p>LOGIN</p>
      <Outlet />
    </div>
  );
};

export default Login;
