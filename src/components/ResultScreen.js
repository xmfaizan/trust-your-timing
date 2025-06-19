import React from "react";
import {
  getReactionMessage,
  formatTime,
  getDifferenceColor,
} from "../utils/gameHelpers";
import "../styles/animations.css";

const ResultScreen = ({ lastTime, targetTime, attempts, onRestartGame }) => {
  const reaction = getReactionMessage(lastTime, targetTime);
  const difference = lastTime - targetTime;
  const accuracyPercentage = Math.max(
    0,
    Math.round(100 - (Math.abs(difference) / targetTime) * 100)
  );

  return (
    <div className="fade-in">
      {/* Main Result */}
      <div className="text-center mb-5">
        <div className="bounce-in">
          <div
            className="display-1 fw-bold mb-2 text-black"
            style={{ letterSpacing: "-1px" }}
          >
            {formatTime(lastTime)}s
          </div>
          <div className="h2 mb-4" style={{ color: reaction.color }}>
            <span className="me-2" style={{ fontSize: "1.5em" }}>
              {reaction.emoji}
            </span>
            {reaction.message}
          </div>
          <div className="badge bg-secondary fs-6 px-3 py-2">
            Target: {targetTime}s
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="row g-3 mb-4 scale-in">
        <div className="col-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <div className="text-muted small fw-semibold mb-2">Your Time</div>
              <div className="h4 fw-bold text-black mb-0">
                {formatTime(lastTime)}s
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <div className="text-muted small fw-semibold mb-2">
                Difference
              </div>
              <div
                className="h4 fw-bold mb-0"
                style={{ color: getDifferenceColor(lastTime, targetTime) }}
              >
                {difference > 0 ? "+" : ""}
                {formatTime(difference)}s
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <div className="text-muted small fw-semibold mb-2">Attempts</div>
              <div className="h4 fw-bold text-black mb-0">
                {attempts.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accuracy Indicator */}
      <div className="mb-4 scale-in">
        <div className="card border-0 bg-light">
          <div className="card-body text-center py-3">
            <div className="row align-items-center">
              <div className="col">
                <small className="text-muted fw-semibold">Accuracy</small>
                <div className="progress mt-2" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{
                      width: `${accuracyPercentage}%`,
                      backgroundColor: reaction.color,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-auto">
                <span className="fw-bold" style={{ color: reaction.color }}>
                  {accuracyPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={onRestartGame}
          className="btn btn-dark btn-lg px-5 py-3 fw-semibold pulse"
          style={{ borderRadius: "12px" }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
