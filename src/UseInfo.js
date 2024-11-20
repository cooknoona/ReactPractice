import React, { useEffect, useState } from "react";

const UseInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log(name, nickname);
  }, [nickname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <br />
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </div>
  );
};

export default UseInfo;
