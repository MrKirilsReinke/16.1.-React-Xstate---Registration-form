import { Field } from 'formik';
import Input from '../Input/Input';
import FormikButton from '../Button/FormikButton';

interface FormikProps {
  formik: any;
  send: any;
}

function EnteringEmailFormPart({ formik, send }: FormikProps) {
  
  const validateEmail = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  return (
    <div className="grid grid-flow-row gap-5 justify-center">
      <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300 mt-5">
      To begin registration, enter your e-mail address.
      </p>
      <Field
        as={Input}
        placeholder="E-mail"
        name="eMail"
        type="email"
        validate={validateEmail}
        formik={formik}
        required={true}
      />
      {formik.touched.eMail &&
    formik.errors.eMail /* formik.errors.eMail */ ? (
          <div className="text-red-900">{formik.errors.eMail}</div>
        ) : (
          formik.isValid && (
            <div className="grid gap-10 w-[300px] m-auto mt-2">
              <FormikButton
                onClick={() => {
                  send({
                    type: 'SUBMIT_EMAIL_ADDRESS'
                  });
                }}>
            Next
              </FormikButton>
            </div>
          )
        )}
    </div>
  );
}

export default EnteringEmailFormPart;