import { useState } from "react";

const useInput = (validateValue) => {
  const [EnteredValue, setEnteredValue] = useState("");
  const [isFieldVisited, setIsFieldVisited] = useState(false);
  const valueIsValid = validateValue(EnteredValue);
  const hasError = !valueIsValid && isFieldVisited;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setIsFieldVisited(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsFieldVisited(false);
  };
  return {
    value: EnteredValue,
    hasError: hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
