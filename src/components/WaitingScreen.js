import React from "react";
import "../styles/animations.css";

const WaitingScreen = ({ targetTime, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fade-in text-center py-5 d-flex flex-column justify-content-center align-items-center"
      style={{ cursor: "pointer", minHeight: "70vh" }}
    >
      <div className="mb-4 scale-in">
        <div className="spinner mb-4"></div>
      </div>

      <h2 className="display-6 fw-bold text-black mb-3 pulse">
        Timing {targetTime} seconds...
      </h2>

      <p className="lead text-muted fw-light">
        Click anywhere when you think {targetTime} seconds have passed
      </p>

      <div className="mt-4">
        <small className="text-muted">💡 Trust your instincts</small>
      </div>
    </div>
  );
};

export default WaitingScreen;
