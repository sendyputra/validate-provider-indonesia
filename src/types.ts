export type iGetOperator = (no: string, validate: boolean) => iResults;

export type iResults = {
  valid: boolean;
  message: string;
  operator: string;
  card: string;
};

export type iValidationMessage = {
  VALID: string;
  INVALID: string;
  BELOW_MIN: string;
  ABOVE_MAX: string;
  NOT_FOUND: string;
};

export type iOperators = {
  name: string;
  operator: string;
  code: number[];
  validationConfig: {
    maxLength: number;
    minLength: number;
  };
};
