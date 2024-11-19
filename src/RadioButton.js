import { useState } from "react";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = useState("apple");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor="apple">
        <input type="radio" name="fruits" id="apple" value={"apple"} onChange={handleChange} />
        <br />
        <label htmlFor="banana"></label>
        <input type="radio" name="fruits" id="banana" value={"banana"} onChange={handleChange} />
        <br />
        <label htmlFor="strawberry"></label>
        <input type="radio" name="fruits" id="strawberry" value={"strawberry"} onChange={handleChange} />
        <br />
      </label>
      <br />
      <p>선택된 과일 {selectedValue}</p>
    </div>
  );
};

export default RadioButton;
