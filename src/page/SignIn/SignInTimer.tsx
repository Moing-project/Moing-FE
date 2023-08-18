import React, { useState, useEffect } from "react";

interface Props {
  initialTime: number; // 초기 타이머 값
  resetKey: number; // 키 값 변경 시 초기화를 위한 prop
}

export default function SignInTimer({ initialTime, resetKey }: Props) {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // 타이머 값 초기화
    setRemainingTime(initialTime);

    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [resetKey, initialTime]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <h3>{formatTime(remainingTime)}</h3>;
}
