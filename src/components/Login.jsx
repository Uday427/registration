import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeValues = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleUserLogin = async (e) => {
    e.preventDefault();
    const loginUser = await axios.get(
      `https://crud-api-lake.vercel.app/login?email=${user.email}&password=${user.password}`
    );
    console.log("loginUser ", loginUser.data);
    if (typeof loginUser.data === "string") {
      navigate("/login");
    } else {
      localStorage.setItem("user", JSON.stringify(loginUser.data)); //  userId=1
      navigate("/crud");
    }
  };
  return (
    <>
      <Header />
      <div className="container mt-5 text-center w-50">
        <form onSubmit={(e) => handleUserLogin(e)}>
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            className="mainForm form-control w-50 m-auto"
            onChange={onChangeValues}
          />
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            className="mainForm form-control w-50 m-auto"
            onChange={onChangeValues}
          />
          <br />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
