import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  text-align: center;
  .enter-click {
    background-color: royalblue;
  }
  .leave-click {
    background-color: orangered;
  }
`;

const Btn = styled.div`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  background-color: ${(props) => props.color || "black"};
  transition: all 0.1s ease-in;

  &:hover {
    color: #aaa;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const Say = () => {
  const [message, setMessage] = useState(" ");
  const [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");
  // const onClickMessage = (msg) => setMessage(msg);

  return (
    <Container>
      <BtnContainer>
        <Btn className="enter-click" onClick={onClickEnter}>
          입장
        </Btn>
        <Btn className="leave-click" onClick={onClickLeave}>
          퇴장
        </Btn>
      </BtnContainer>
      {/* <button onClick={() => onClickMessage("안녕하세요.")}>입장</button>
      <button onClick={() => onClickMessage("안녕히 가세요.")}>퇴장</button> // 위에 하나의 함수를 정의후에 아래에 임의의 함수를 재지정해 값을 바꿀수 있음*/}
      <h1 style={{ color: value }}>{message}</h1> {/* 구조 분해로 인해 { } 한번 더 써서 value로 접근 */}
      <BtnContainer>
        <Btn color="red" onClick={() => setValue("red")}>
          빨간색
        </Btn>
        <Btn color="blue" onClick={() => setValue("blue")}>
          파란색
        </Btn>
        <Btn color="green" onClick={() => setValue("green")}>
          초록색
        </Btn>
      </BtnContainer>
    </Container>
  );
};

export default Say;
