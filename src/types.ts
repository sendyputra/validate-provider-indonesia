export type iGetOperator = (no: String, validate: Boolean) => void

export type iResults = {
  valid: Boolean
  message: String
  operator: String
  card: String
}

export type iValidationMessage = {
  VALID :String
  INVALID :String
  BELOW_MIN :String
  ABOVE_MAX :String
  NOT_FOUND :String
}

export type iOperators = {
  name: String
  operator: String
  code: Number[]
  validationConfig: {
    maxLength: Number
    minLength: Number
  }
}
