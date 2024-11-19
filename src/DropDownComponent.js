// select 요소와 option 요소를  사용하여 드롭다운 메뉴 구현
import { useState } from "react";

const DropDownComponent = () => {
  const [selectValue, setSelectValue] = useState(" ");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const fruits = [
    {
      value: "apple",
      title: "사과",
    },
    {
      value: "banana",
      title: "바나나",
    },
    {
      value: "grape",
      title: "포도",
    },
    {
      value: "cherry",
      title: "체리",
    },
  ];
  return (
    <div>
      <h1>드롭다운 예제</h1>
      {/* 드롭다운 option에서 값은 value = {selectValue} 안에 담기며 handleChange가 작동한다
            value={selectValue} 를 제외하면 React가 아닌 HTML DOM에서 관리하게 된다 */}
      <select value={selectValue} onChange={handleChange}>
        <option value="" disabled>
          과일을 선택 하세요.
        </option>
        <option value="apple">사과</option>
        <option value="banan">바나나</option>
        <option value="grape">포도</option>
        <option value="cherry">체리</option>

        {/* <option value={fruits[0].value}">{fruit[0].title}</option>
        <option value={fruits[1].value}">{fruit[1].title}</option>
        <option value={fruits[2].value}">{fruit[2].title}</option>
        <option value={fruits[3].value}">{fruit[3].title}</option> // 객체화된 Array를 조합해 사용 할 수 있음*/}
      </select>
      <p>선택된 과일 {selectValue}</p>
    </div>
  );
};

export default DropDownComponent;
