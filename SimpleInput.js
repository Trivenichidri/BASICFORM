//import { useEffect, useState } from "react";
import "./SimpleInput.css";
import useInput from "../Hooks/useInput";
const SimpleInput = (props) => {
  const {
    value: userEnteredName,
    hasError: NameInputHasError,
    isValid: userNameFieldIsValid,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: userNameBlurHandler,
    reset: userNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userEnteredEmail,
    hasError: EmailInputHasError,
    isValid: userEmailFieldIsValid,
    valueChangeHandler: userEmailChangeHandler,
    valueBlurHandler: userEmailBlurHandler,
    reset: userEmailReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: userEnteredAge,
    hasError: AgeInputHasError,
    isValid: userAgeFieldIsValid,
    valueChangeHandler: userAgeChangeHandler,
    valueBlurHandler: userAgeBlurHandler,
    reset: resetAgeInput,
  } = useInput((value) => value > 0);

  const {
    value: userEnteredPhone,
    hasError: phoneInputHasError,
    isValid: userPhoneFieldIsValid,
    valueChangeHandler: userPhoneChangeHandler,
    valueBlurHandler: userPhoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.length >= 10);

  let formValidity = false;
  if (
    userNameFieldIsValid &&
    userEmailFieldIsValid &&
    userAgeFieldIsValid &&
    userPhoneFieldIsValid
  ) {
    formValidity = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !userEmailFieldIsValid &&
      !userEmailFieldIsValid &&
      !userAgeFieldIsValid &&
      !userPhoneFieldIsValid
    ) {
      return;
    }
    userEmailReset();
    userNameReset();
    resetAgeInput();
    resetPhoneInput();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`form ${NameInputHasError ? "invalid" : " "}`}>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          id="name"
          name="name"
          onChange={userNameChangeHandler}
          value={userEnteredName}
          onBlur={userNameBlurHandler}
        ></input>
        {NameInputHasError && (
          <p className="error-Message">Name cannot be blank</p>
        )}
      </div>
      <div className={`form ${EmailInputHasError ? "invalid" : " "}`}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={userEmailChangeHandler}
          value={userEnteredEmail}
          onBlur={userEmailBlurHandler}
        ></input>
        {EmailInputHasError && (
          <p className="error-Message">Email cannot be blank</p>
        )}
      </div>

      <div className={`form ${AgeInputHasError ? "invalid" : " "}`}>
        <label htmlFor="age">Age</label>
        <input
          type="age"
          id="age"
          name="age"
          onChange={userAgeChangeHandler}
          value={userEnteredAge}
          onBlur={userAgeBlurHandler}
        ></input>
        {AgeInputHasError && (
          <p className="error-Message">Age cannot be blank</p>
        )}
      </div>
      <div className={`form ${phoneInputHasError ? "invalid" : ""}`}>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={userPhoneChangeHandler}
          value={userEnteredPhone}
          onBlur={userPhoneBlurHandler}
        ></input>
        {phoneInputHasError && (
          <p className="error-Message">Phone cannot be blank</p>
        )}
      </div>
      <div className="button-action">
        <button type="submit" disabled={!formValidity}>
          submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
