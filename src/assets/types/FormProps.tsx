// import { Typegen0 } from "../machines/validationFormMachine.typegen";

type FormProps<> = {
  formik?: {
    touched: { [key: string]: boolean };
    errors: { [key: string]: string };
    isValid: boolean;
    values?: object;
  };
  send: any; // Can not figure out how to handle type here right.
  currentState?: any; // Can not figure out how to handle type here right.
};

export default FormProps;
