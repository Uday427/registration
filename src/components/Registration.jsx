import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const handleUserRegistration = async (e) => {
    e.preventDefault();
    let uservalues = await axios.post(
      "https://crud-api-lake.vercel.app/registration",
      user
    );
    navigate("/login");
    console.log(uservalues);
  };
  const onChangeValues = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <>
      <Header></Header>
      <div className="container mt-5 text-center w-50">
        <form onSubmit={(e) => handleUserRegistration(e)}>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter your name"
            className="mainForm form-control w-50 m-auto"
            onChange={onChangeValues}
          />
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
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            placeholder="Enter your phoneNumber"
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
          <button className="btn btn-primary">Registration</button>
        </form>
      </div>
    </>
  );
}

export default Registration;
