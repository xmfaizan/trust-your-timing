import React, { useState } from "react";
import { validateTargetTime } from "../utils/gameHelpers";
import StatsCard from "./StatsCard";
import "../styles/animations.css";

const SetupScreen = ({ onStartGame, attempts, bestTime, onResetStats }) => {
  const [targetTime, setTargetTime] = useState(5);
  const [error, setError] = useState("");

  const handleTimeChange = (newTime) => {
    if (validateTargetTime(newTime)) {
      setTargetTime(newTime);
      setError("");
    }
  };

  const handleStart = () => {
    if (validateTargetTime(targetTime)) {
      onStartGame(targetTime);
    } else {
      setError("Please select a time between 3 and 20 seconds");
    }
  };

  const quickSelect = (time) => {
    setTargetTime(time);
    setError("");
  };

  return (
    <div className="fade-in">
      <h1
        className="fw-normal fst-italic mb-4 text-black text-center"
        style={{
          letterSpacing: "-1px",
          fontWeight: "400",
          fontSize: "clamp(1.8rem, 6vw, 3rem)",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        Do You Trust Your Timing?
      </h1>

      {/* Time Selector */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <div className="mb-3">
            <label className="form-label fw-semibold text-center d-block mb-3">
              Choose Your Challenge (3-20 seconds)
            </label>

            {/* Quick Select Buttons */}
            <div className="d-flex gap-2 justify-content-center flex-wrap mb-3">
              {[3, 5, 7, 10, 15, 20].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => quickSelect(time)}
                  className={`btn ${
                    targetTime === time ? "btn-dark" : "btn-outline-dark"
                  } btn-sm`}
                >
                  {time}s
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="row justify-content-center">
              <div className="col-6">
                <input
                  type="number"
                  className={`form-control form-control-lg text-center ${
                    error ? "is-invalid" : ""
                  }`}
                  value={targetTime}
                  onChange={(e) => handleTimeChange(parseFloat(e.target.value))}
                  min="3"
                  max="20"
                  step="1"
                  style={{ fontSize: "1.2rem", fontWeight: "600" }}
                />
                {error && (
                  <div className="invalid-feedback text-center">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h3 className="h5 mb-4 text-black fw-semibold">How to Play:</h3>
          <div className="text-start">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                1
              </div>
              <span>
                Click the <strong>Start</strong> button
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                2
              </div>
              <span>Count to {targetTime} seconds in your head</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                3
              </div>
              <span>
                Click <strong>anywhere</strong> when you think {targetTime}{" "}
                seconds have passed
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                4
              </div>
              <span>See how close you got!</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleStart}
        className="btn btn-dark btn-lg px-5 py-3 fw-semibold shadow-sm"
        style={{ fontSize: "1.1rem", borderRadius: "12px" }}
      >
        Start {targetTime}s Challenge
      </button>

      <StatsCard
        attempts={attempts}
        bestTime={bestTime}
        targetTime={targetTime}
        onResetStats={onResetStats}
      />
    </div>
  );
};

export default SetupScreen;
