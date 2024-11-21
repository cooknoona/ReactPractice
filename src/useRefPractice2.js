import React, { useEffect, useRef, useState } from "react";

const InnerValueMaintainence = () => {
  const BtnRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용

  useEffect(() => {
    if (BtnRef.current) {
      // current는 렌더링시 현재의 값을 저장하기 위한 매개체
      BtnRef.current.innerText = "클릭하세요";
    }
  }, []);
  // Component 내부 변수값 유지
  const count = useRef(0);
  const [state, setState] = useState(false);

  const handleClick = () => {
    count.current += 1;
    setState(!state);
    alert(`클릭 횟수 : ${count.current}`);
  };
  return (
    <div>
      <button ref={BtnRef} onClick={handleClick}>
        확인
      </button>
    </div>
  );
};

export default InnerValueMaintainence;
