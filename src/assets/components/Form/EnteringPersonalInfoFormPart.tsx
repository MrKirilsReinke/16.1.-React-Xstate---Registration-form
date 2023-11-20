import FormikProps from '../../types/FormikProps';
import FormikInput from '../Input/FormikInput';
import FormikButton from '../Button/FormikButton';
import { Field } from 'formik';

function EnteringPersonalInfoFormPart({ formik, send }: FormikProps) {
  
  const validationWithNoDigits = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'First name cannot contain numbers';
    }
    return error;
  };

  const validateDateOfBirth = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (!/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/i.test(value)) {
      error = 'Please enter a valid date in the format dd.mm.yyyy';
    }
    return error;
  };

  const validateUserName = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (value.length > 15) {
      error = 'Must be 15 characters or less';
    }
    return error;
  };

  return (
    <div className="mt-5 space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-start text-lg font-semibold leading-7 text-white">
          Personal Inforamtion
          </h2>
          <p className="text-start mt-1 text-sm leading-6 text-white">
          Please, provide your personal infromation
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-600">
          Please note, next step is impossible until all the fields are
          filled out correctly.
          </p>
        </div>
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Field
                  as={FormikInput}
                  label="First name"
                  placeholder="First name"
                  name="firstName"
                  validate={validationWithNoDigits}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-900 text-sm mt-2">
                    {formik.errors.firstName}
                  </div>
                ) : undefined}
              </div>
              <div className="sm:col-span-3">
                <Field
                  as={FormikInput}
                  label="Last name"
                  placeholder="Last name"
                  name="lastName"
                  validate={validationWithNoDigits}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-900 text-sm mt-2">
                    {formik.errors.lastName}
                  </div>
                ) : undefined}
              </div>
              <div className="sm:col-span-3">
                <Field
                  as={FormikInput}
                  label="Date of birth"
                  placeholder="Example: 06.03.2007"
                  name="dateOfBirth"
                  validate={validateDateOfBirth}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div className="text-red-900 text-sm mt-2">
                    {formik.errors.dateOfBirth}
                  </div>
                ) : undefined}
              </div>
              <div className="sm:col-span-3 sm:col-start-1">
                <Field
                  as={FormikInput}
                  label="Username"
                  placeholder="Username"
                  name="userName"
                  validate={validateUserName}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div className="text-red-900 text-sm mt-2">
                    {formik.errors.userName}
                  </div>
                ) : undefined}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <FormikButton
              onClick={() => {
                send({
                  type: 'GO_BACK'
                });
              }}>
            Back
            </FormikButton>
            <FormikButton
              disabled={
                (!formik.touched.firstName &&
                !formik.touched.lastName &&
                !formik.touched.dateOfBirth &&
                !formik.touched.userName) ||
              !formik.isValid
              }
              onClick={() => {
                send({
                  type: 'SUBMIT_PERSONAL_INFO'
                });
              }}>
            Next
            </FormikButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnteringPersonalInfoFormPart;