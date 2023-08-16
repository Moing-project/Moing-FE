import React, { useState, useEffect } from "react";

export default function Timer() {
  const [remainingTime, setRemainingTime] = useState(180); // 3분을 초로 변환

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [remainingTime]);

  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>타이머</h1>
      <p>{formatTime(remainingTime)}</p>
    </div>
  );
}
