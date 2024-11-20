import React, { useState } from "react";

const UseStatePractice = () => {
  const [info, setInputInfo] = useState({
    name: "",
    position: "",
    comName: "",
    email: "",
    tel: "",
  });

  const [click, setOnClick] = useState(false);

  const onChange = (key, value) => {
    setInputInfo({ ...info, [key]: value });
  };

  const onClick = () => {
    setOnClick(true);
  };

  return (
    <div>
      <input value={info.name} onChange={(e) => onChange("name", e.target.value)} />
      <input value={info.position} onChange={(e) => onChange("position", e.target.value)} />
      <input value={info.comName} onChange={(e) => onChange("comName", e.target.value)} />
      <input value={info.email} onChange={(e) => onChange("email", e.target.value)} />
      <input value={info.tel} onChange={(e) => onChange("tel", e.target.value)} />
      <button onClick={onClick}>추가하기</button>
    </div>
  );
};

const showInfo = (info) => {

  return(
    <div>
      <p>{info.name}</p>
      <p>{info.position}</p>
      <p>{info.comName}</p>
      <p>{info.email}</p>
      <p>{info.tel}</p>
    </div>
  );
}

export default UseStatePractice;
