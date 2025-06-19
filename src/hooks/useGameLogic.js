import { useState, useCallback } from "react";

export const useGameLogic = () => {
  const [gameState, setGameState] = useState("setup"); // 'setup', 'waiting', 'result'
  const [targetTime, setTargetTime] = useState(5);
  const [startTime, setStartTime] = useState(null);
  const [lastTime, setLastTime] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [bestTime, setBestTime] = useState(null);

  const startGame = useCallback((selectedTime) => {
    setTargetTime(selectedTime);
    setGameState("waiting");
    setStartTime(performance.now());
  }, []);

  const handleGameAreaClick = useCallback(() => {
    if (gameState !== "waiting" || !startTime) return;

    const endTime = performance.now();
    const elapsedTime = (endTime - startTime) / 1000;

    setLastTime(elapsedTime);
    setGameState("result");

    const newAttempts = [...attempts, elapsedTime];
    setAttempts(newAttempts);

    if (
      bestTime === null ||
      Math.abs(elapsedTime - targetTime) < Math.abs(bestTime - targetTime)
    ) {
      setBestTime(elapsedTime);
    }
  }, [gameState, startTime, attempts, bestTime, targetTime]);

  const restartGame = useCallback(() => {
    setGameState("setup");
    setStartTime(null);
    setLastTime(null);
  }, []);

  const resetStats = useCallback(() => {
    setAttempts([]);
    setBestTime(null);
    setGameState("setup");
    setStartTime(null);
    setLastTime(null);
  }, []);

  return {
    gameState,
    targetTime,
    lastTime,
    attempts,
    bestTime,
    startGame,
    handleGameAreaClick,
    restartGame,
    resetStats,
  };
};
