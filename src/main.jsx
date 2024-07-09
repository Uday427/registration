import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import CrudOperation from "./components/CrudOperation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crud" element={<CrudOperation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
