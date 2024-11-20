import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          {
            id: 1,
            text: "html 연습",
          },
          {
            id: 2,
            text: "CSS 복습",
          },
          {
            id: 3,
            text: "자바스크립트 이해",
          },
          {
            id: 4,
            text: "리액트 프로젝트",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(names), [names]);
  });

  const [inputText, setInputText] = useState("");
  const [nextID, setNextID] = useState(5);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = () => {
    // const nextNames = names.concat({ id: nextID, text: inputText }); // concat함수를 이용한 불변성의 법칙 적용
    const nextNames = [...names, { id: nextID, text: inputText }]; // 전개연산자를 이용한 불변성의 법칙 적용
    setNextID(nextID + 1); // id를 증가 시킴
    setNames(nextNames); // Todo list 갱신
    setInputText(""); // 입력창을 초기화
  };

  const onRemove = (id) => {
    // 조건에 맞는 요소만 반환 받아서 새로운 배열 생성
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names &&
          names.map((name) => (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
              {name.text}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
