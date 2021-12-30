import { useState } from "react";

export const replaceCamelCaseWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function ColorButton() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [nextColor, setNextColor] = useState("MidnightBlue");
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div>
      <button
        disabled={isCheck}
        onClick={() => {
          setButtonColor(buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed");
          setNextColor(nextColor === "MidnightBlue" ? "MediumVioletRed" : "MidnightBlue");
        }}
        style={{ backgroundColor: isCheck ? "gray" : buttonColor }}
      >
        Change to {replaceCamelCaseWithSpaces(nextColor)}
      </button>
      <input
        id="disabled-checkbox"
        onChange={(e) => {
          setIsCheck(e.target.checked);
        }}
        type="checkbox"
      />
      <label htmlFor="disabled-checkbox">Disable button</label>
    </div>
  );
}

export default ColorButton;
