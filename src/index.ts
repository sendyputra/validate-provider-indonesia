import { operators } from "./operators";
import { iGetOperator, iResults,  } from "./types";
import { ValidationMessage, numericOnly } from "./validation";

export const getOperator:iGetOperator = (no, validate = false) => {
    let code: Number;
    let result:iResults = {
        valid: false,
        message: ValidationMessage.INVALID,
        operator: '',
        card: ''
    }

    // Null Validation
    if(!no){
        return result;
    }

    // + prepend
    if(no.slice(0,1) === '+'){
        no = no.slice(1);
    }

    // country code
    if(no.slice(0,2) === '62'){
        no = '0'+no.slice(2);
    }

    // convert to numeric only
    no = numericOnly(no);

    // get code
    if(no.slice(0, 2) === '08'){
        code = Number(no.slice(2,4));
    }else {
        return result;
    }

    const found = operators.some(data => {
        if(data.code.some (item => item === code)){
            result.operator = data.operator;
            result.card = data.name;
            result.message = ValidationMessage.VALID;
            result.valid = true;

            if(validate){
                // check validation
                if(no.length < data.validationConfig.minLength){
                    result.valid = false;
                    result.message = ValidationMessage.BELOW_MIN;
                }else if(no.length > data.validationConfig.maxLength){
                    result.valid = false;
                    result.message = ValidationMessage.ABOVE_MAX;
                }
            }
            return true;
        }
    });

    if(!found){
        result.valid = false;
        result.message = ValidationMessage.NOT_FOUND;
    }

    return result;
}





