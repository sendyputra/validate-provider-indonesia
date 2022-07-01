import { getOperator } from "../src";
import { operators } from "../src/operators";
const prefix = operators.find((i) => i?.name === "KARTU As")?.code || [];

describe("KARTU As", () => {
  prefix.forEach((i) => {
    test(`prepend ${i}`, () => {
      expect(getOperator(`+628${i}67890`, true)).toStrictEqual({
        valid: true,
        message: "VALID",
        operator: "Telkomsel",
        card: "KARTU As",
      });
    });

    test(`country code ${i}`, () => {
      expect(getOperator(`628${i}67890`, true)).toStrictEqual({
        valid: true,
        message: "VALID",
        operator: "Telkomsel",
        card: "KARTU As",
      });
    });

    test(`standard number ${i}`, () => {
      expect(getOperator(`08${i}67890`, true)).toStrictEqual({
        valid: true,
        message: "VALID",
        operator: "Telkomsel",
        card: "KARTU As",
      });
    });

    test(`min length ${i}`, () => {
      expect(getOperator(`08${i}`, true)).toStrictEqual({
        valid: false,
        message: "BELOW MINIMUM LENGTH",
        operator: "Telkomsel",
        card: "KARTU As",
      });
    });

    test(`max length ${i}`, () => {
      expect(getOperator(`08${i}6789012111`, true)).toStrictEqual({
        valid: false,
        message: "ABOVE MAXIMUM LENGTH",
        operator: "Telkomsel",
        card: "KARTU As",
      });
    });

    test(`invalid ${i}`, () => {
      expect(getOperator(`18${i}6789012`, true)).toStrictEqual({
        valid: false,
        message: "INVALID",
        operator: "",
        card: "",
      });
    });

    test(`not found ${i}`, () => {
      expect(getOperator("084597890", true)).toStrictEqual({
        valid: false,
        message: "NOT FOUND",
        operator: "",
        card: "",
      });
    });
  });
});
