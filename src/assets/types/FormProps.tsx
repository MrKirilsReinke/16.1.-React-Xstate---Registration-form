import { State } from 'xstate';
import { Typegen0 } from '../machines/validationFormMachine.typegen';

type FormProps<T extends Typegen0> = {
  formik?: {
    touched: { [key: string]: boolean };
    errors: { [key: string]: string };
    isValid: boolean;
  };
  send: (event: { type: string; values?: object | undefined}) => State<T['matchesStates']>;
  // send: (event:
  // | { type: 'CREATE_NEW_USERNAME' }
  // | { type: 'SUBMIT_PERSONAL_INFO' /* values: object */ }
  // | { type: 'ENTERING_USER_NAME' }
  // | { type: 'SUBMIT_EMAIL_ADDRESS' /* value: string */ }
  // | { type: 'ENTERING_EMAIL_ADDRESS' }
  // | { type: 'ENTERING_PHONE_NUMBER' }
  // | { type: 'SUBMIT_CONTACT_INFO'; values: object }
  // | { type: 'GO_BACK' }
  // | { type: 'SUBMIT_FORM_COMPLETION' /* values: object */ }
  // | { type: 'RETURN_TO_BEGINNING' }
  // ) => State<T['matchesStates']>;
  currentState?: State<T['matchesStates']>;
}

export default FormProps;


