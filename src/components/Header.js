import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        My todos
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default header;
