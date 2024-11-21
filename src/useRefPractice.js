import React, { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null); // 참조하는 DOM요소가 없음, 안전한 초기화를 보장

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <div>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </div>
  );
};

export default CreateRef;
