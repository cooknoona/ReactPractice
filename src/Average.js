import React, { useCallback, useMemo, useState } from "react";

const getAverage = (number) => {
  console.log("평균값 계산 중...");
  if (number.length === 0) {
    return 0;
  }
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  const onChange = useCallback((e) => {
    // useCallback 을 렌더링 성능 최적하를 위함, useMemo와 거의 비슷함
    setNumber(e.target.value);
  }, []);

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number)); // 입력 받은 값을 정수로 변환
  //   setList(nextList); // 새로 만들어진 배열로 상태 변경
  //   setNumber(""); // 입력창 초기화
  // };

  const onInsert = useCallback(
    // useCallback 을 이용한 렌더링 성능 최적화
    (e) => {
      const nextList = list.concat(parseInt(number)); // 입력 받은 값을 정수로 변환
      setList(nextList); // 새로 만들어진 배열로 상태 변경
      setNumber(""); // 입력창 초기화
    },
    [list, number] // 의존성 배열에 list, number 필요
  );
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} type="text" onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>{list && list.map((val, index) => <li key={index}>{val}</li>)}</ul>
      <p>평균값 : {avg}</p>
    </div>
  );
};

export default Average;
