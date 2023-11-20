import FormikProps from '../../types/FormikProps';
import FormikInput from '../Input/FormikInput';
import FormikButton from '../Button/FormikButton';
import { Field } from 'formik';

function EnteringContactInfoFormPart({ formik, send }: FormikProps) {
  
  const validationWithNoDigits = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'First name cannot contain numbers';
    }
    return error;
  };

  const validatePhoneNumber = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (!/^\d{10}$/i.test(value)) {
      error = 'Invalid phone number. Please enter a 10-digit number.';
    }
    return error;
  };

  const validateStreetAddress = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    }
    return error;
  };

  const validatePostalCode = (value: string) => {
    const postalCodeRegex = /^[A-Za-z]{2}-\d{4}$/;
    const sanitizedValue = value.trim();

    if (!sanitizedValue) {
      return 'Postal code is required';
    } else if (!postalCodeRegex.test(sanitizedValue)) {
      return 'Postal code must be in the format "two letters - 4 digits"';
    }
    return undefined;
  };

  return (
    <div className="mt-5 space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-start text-lg font-semibold leading-7 text-white">
            Contact Inforamtion
          </h2>
          <p className="text-start mt-1 text-sm leading-6 text-white">
            Please, provide your contact infromation
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            Please note, next step is impossible until all the fields are filled out correctly.
          </p>
        </div>
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Field
                  as={FormikInput}
                  label="Phone number"
                  placeholder="Phone number"
                  name="phoneNumber"
                  validate={validatePhoneNumber}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-900 text-sm mt-2">{formik.errors.phoneNumber}</div>
                ) : undefined}
              </div>
              <div className="sm:col-span-3 sm:col-start-1">
                <Field
                  as={FormikInput}
                  label="Street address"
                  placeholder="Street address"
                  name="streetAddress"
                  validate={validateStreetAddress}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
                  <div className="text-red-900 text-sm mt-2">{formik.errors.streetAddress}</div>
                ) : undefined}
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <Field
                  as={FormikInput}
                  label="Country"
                  placeholder="Country"
                  name="country"
                  validate={validationWithNoDigits}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-900 text-sm mt-2">{formik.errors.country}</div>
                ) : undefined}
              </div>
              <div className="sm:col-span-2">
                <Field
                  as={FormikInput}
                  label="City"
                  placeholder="City"
                  name="city"
                  validate={validationWithNoDigits}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-900 text-sm mt-2">{formik.errors.city}</div>
                ) : undefined}
              </div>
              <div className="sm:col-span-2">
                <Field
                  as={FormikInput}
                  label="Postal code"
                  placeholder="Posatal code"
                  name="zip"
                  validate={validatePostalCode}
                  formikError={formik.errors}
                  formikTouched={formik.touched}
                  required={true}
                />
                {formik.touched.zip && formik.errors.zip ? (
                  <div className="text-red-900 text-sm mt-2">{formik.errors.zip}</div>
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
                (!formik.touched.phoneNumber &&
                  !formik.touched.streetAddress &&
                  !formik.touched.country &&
                  !formik.touched.city &&
                  !formik.touched.zip) ||
                !formik.isValid
              }
              onClick={() => {
                send({
                  type: 'SUBMIT_CONTACT_INFO',
                  values: formik.values
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

export default EnteringContactInfoFormPart;
