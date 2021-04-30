import { useState } from "react";

export function validateEmail(value) {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    value
  );
}

export function validatePass(value) {
  return value.length >= 6 && value !== "";
}
export function validateVerifyPass(valuePass, value) {
  return value.length >= 6 && value !== "" && valuePass === value;
}
export function validateText(value) {
  return value !== "";
}
export function validateDni(value) {
  return value !== "";
}

export function useStateValidation(fields) {
  const valObj = fields.reduce(function (preValue, curValue) {
    const { key, errorMsg } = curValue;
    return {
      ...preValue,
      [key]: {
        value: "",
        isError: false,
        errorMsg: errorMsg || "",
      },
    };
  }, {});

  return useState(valObj);
}
