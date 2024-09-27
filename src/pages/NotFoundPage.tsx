import React from "react";
import "../styles/NotFoundPage.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404</h1>
      <p className="not-found-message">Oops! Page not found.</p>
      <a href="/" className="not-found-link">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
