import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-sm-9"></div>
        <div className="col-md-3 text-end">
          <Link
            to="/login"
            type="button"
            className="btn btn-outline-primary me-2"
          >
            Login
          </Link>
          <Link to="/" type="button" className="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
