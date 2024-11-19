import { useState } from "react";

const EventHandler = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const changeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onClick = () => {
    alert(` ${userName} : ${message}`);
    setUserName(""); // 입력 창 비우기
    setMessage(""); // 입력 창 비우기
  };
  // Enter Key 가 입력되면 onClick() 호출
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" placeholder="사용자명" onChange={changeUsername} />
      <input type="text" placeholder="아무거나 입력" onChange={changeMessage} value={message} onKeyDown={onKeyPress} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventHandler;
