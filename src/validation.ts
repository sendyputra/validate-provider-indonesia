import { iValidationMessage } from "./types";

export const ValidationMessage: iValidationMessage = {
  "VALID" : "VALID",
  "INVALID": "INVALID",
  "BELOW_MIN" : "BELOW MINIMUM LENGTH",
  "ABOVE_MAX" : "ABOVE MAXIMUM LENGTH",
  "NOT_FOUND" : "NOT FOUND"
}

export const numericOnly = (value: String) => {
  return value.replace(/\D/g,'');
}