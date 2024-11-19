import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []); // 의존성 배열이라고 하며, [ ] 빈 배열이면 Mount 시점을 의미
  return (
    <div>
      <h1>현재 시간을 표시 합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
