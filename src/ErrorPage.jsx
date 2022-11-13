import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>Sorry this page does not exist</p>
      <p>
        {" "}
        Go
        <Link to="/">Home</Link> from here.
      </p>
    </div>
  );
};

export default ErrorPage;
