import React from "react";
import "./ErrorMessage.css";

function ErrorMessage() {
  return (
    <div className="errorContainer">
      <p>This location does not appear to exist.</p>
      <p>Please try again.</p>
    </div>
  );
}

export default ErrorMessage;
