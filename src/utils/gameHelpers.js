export const getReactionMessage = (time, targetTime) => {
  const diff = Math.abs(time - targetTime);
  const percentage = (diff / targetTime) * 100;

  if (percentage < 2)
    return { message: "Perfect!", emoji: "🎯", color: "#28a745" };
  if (percentage < 5)
    return { message: "Incredible!", emoji: "⭐", color: "#28a745" };
  if (percentage < 10)
    return { message: "Amazing!", emoji: "🔥", color: "#ffc107" };
  if (percentage < 20)
    return { message: "Good try!", emoji: "👍", color: "#17a2b8" };
  if (percentage < 40)
    return { message: "Not bad!", emoji: "💪", color: "#6c757d" };
  return { message: "Try again!", emoji: "🎮", color: "#dc3545" };
};

export const calculateAverage = (times) => {
  if (times.length === 0) return 0;
  return times.reduce((sum, time) => sum + time, 0) / times.length;
};

export const formatTime = (time) => {
  return time?.toFixed(3) || "0.000";
};

export const getDifferenceColor = (time, targetTime) => {
  const diff = Math.abs(time - targetTime);
  const percentage = (diff / targetTime) * 100;

  if (percentage < 10) return "#28a745";
  if (percentage < 20) return "#ffc107";
  return "#dc3545";
};

export const validateTargetTime = (time) => {
  const num = parseFloat(time);
  return !isNaN(num) && num >= 3 && num <= 20;
};
