import React from "react";
import { calculateAverage, formatTime } from "../utils/gameHelpers";

const StatsCard = ({ attempts, bestTime, targetTime, onResetStats }) => {
  if (attempts.length === 0) return null;

  const bestDifference = Math.abs(bestTime - targetTime);
  const avgDifference = Math.abs(calculateAverage(attempts) - targetTime);

  return (
    <div className="mt-4 fade-in">
      <div className="row g-3">
        <div className="col-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center py-3">
              <div className="text-muted small fw-semibold">Best Time</div>
              <div className="h4 fw-bold mb-1 text-success">
                {formatTime(bestTime)}s
              </div>
              <div className="small text-muted">
                {bestDifference < 0.1
                  ? "Perfect!"
                  : `±${formatTime(bestDifference)}s`}
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center py-3">
              <div className="text-muted small fw-semibold">Average</div>
              <div className="h4 fw-bold mb-1 text-primary">
                {formatTime(calculateAverage(attempts))}s
              </div>
              <div className="small text-muted">
                ±{formatTime(avgDifference)}s
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <small className="text-muted">
          {attempts.length} attempts • Target: {targetTime}s
        </small>
        <button
          onClick={onResetStats}
          className="btn btn-outline-secondary btn-sm ms-3"
        >
          Reset Stats
        </button>
      </div>
    </div>
  );
};

export default StatsCard;
