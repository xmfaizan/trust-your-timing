import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useGameLogic } from "./hooks/useGameLogic";
import SetupScreen from "./components/SetupScreen";
import WaitingScreen from "./components/WaitingScreen";
import ResultScreen from "./components/ResultScreen";
import "./styles/animations.css";

function App() {
  const {
    gameState,
    targetTime,
    lastTime,
    attempts,
    bestTime,
    startGame,
    handleGameAreaClick,
    restartGame,
    resetStats,
  } = useGameLogic();

  return (
    <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center p-4">
      <div className="w-100 text-center" style={{ maxWidth: "600px" }}>
        {gameState === "setup" && (
          <SetupScreen
            onStartGame={startGame}
            attempts={attempts}
            bestTime={bestTime}
            onResetStats={resetStats}
          />
        )}

        {gameState === "waiting" && (
          <WaitingScreen
            targetTime={targetTime}
            onClick={handleGameAreaClick}
          />
        )}

        {gameState === "result" && (
          <ResultScreen
            lastTime={lastTime}
            targetTime={targetTime}
            attempts={attempts}
            onRestartGame={restartGame}
          />
        )}
      </div>
      <Analytics />
    </div>
  );
}

export default App;
