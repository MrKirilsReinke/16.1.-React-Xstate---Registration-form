import { State } from 'xstate';

type FormikProps = {
  formik?: any;
  send: (event: { type: string; values?: object }) => void;
  currentState?: State<Event>;
}

export default FormikProps;
