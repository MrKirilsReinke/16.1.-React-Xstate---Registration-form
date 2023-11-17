import formikValidationFormMachine from '../machines/formikValidationFormMachine';
import { useMachine } from '@xstate/react';
import FormikInput from './Input/FormikInput';
import FormikButton from './Button/FormikButton';
import Svg from '../images/Svg';
import { Formik, Field, Form } from 'formik';
import Input from './Input/Input';

interface FormValues {
  eMail: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  userName: string;
  phoneNumber: string;
  country: string;
  streetAddress: string;
  city: string;
  zip: string;
}

function FormikApp() {
  const [currentState, send] = useMachine(formikValidationFormMachine, {
    services: {},
    devTools: true
  });

  const validateEmail = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validateFirstName = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'First name cannot contain numbers';
    }
    return error;
  };

  const validateLastName = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'Last name cannot contain numbers';
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

  const validateCountry = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'Last name cannot contain numbers';
    }
    return error;
  };

  const validateCity = (value: string) => {
    let error;

    if (!value) {
      error = 'Fill out this field';
    } else if (/\d/.test(value)) {
      error = 'Last name cannot contain numbers';
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
    <Formik
      initialValues={{
        eMail: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        country: '',
        userName: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        zip: ''
      }}
      validateOnBlur={true}
      validateOnChange={true}
      validateOnMount={true}
      onSubmit={(values: FormValues, { resetForm } /* { setSubmitting } */) => {
        send({
          type: 'SUBMIT_FORM_COMPLETION'
        });
        resetForm({
          values: {
            eMail: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            country: '',
            userName: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            zip: ''
          }
        });
      }}>
      {formik => {
        console.log('formik props', formik, 'formik values', formik.values);
        return (
          <Form>
            <div className="bg-gray-900 py-16 sm:py-24 h-screen grid justify-center items-center">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
                  <p className="absolute mt-1 text-sm leading-6 text-green-500 top-[0px] hidden sm:block">
                    (Current step:{JSON.stringify(currentState.value)})
                  </p>
                  {!currentState.matches('formCompletion') ? (
                    !currentState.matches('formSubmitted') && (
                      <div>
                        <div className="flex flex-col justify-center items-center gap-10 sm:gap-4 md:gap-8 lg:gap-12">
                          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            React/Xstate multi-step form with validation.
                          </h2>
                          {currentState.matches('enteringEmail.active') && (
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
                                onChange={formik.handleChange}
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
                          )}
                          {currentState.matches('enteringPersonalInfo.active') && (
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
                                          validate={validateFirstName}
                                          formik={formik} // for error
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
                                          validate={validateLastName}
                                          formik={formik} // for error
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
                                          formik={formik} // for error
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
                                          formik={formik} // for error
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
                          )}
                          {currentState.matches('enteringContactInfo') && (
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
                                          label="Phone number"
                                          placeholder="Phone number"
                                          name="phoneNumber"
                                          validate={validatePhoneNumber}
                                          formik={formik} // for error
                                          required={true}
                                        />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                          <div className="text-red-900 text-sm mt-2">
                                            {formik.errors.phoneNumber}
                                          </div>
                                        ) : undefined}
                                      </div>
                                      <div className="sm:col-span-3 sm:col-start-1">
                                        <Field
                                          as={FormikInput}
                                          label="Street address"
                                          placeholder="Street address"
                                          name="streetAddress"
                                          validate={validateStreetAddress}
                                          formik={formik} // for error
                                          required={true}
                                        />
                                        {formik.touched.streetAddress &&
                                        formik.errors.streetAddress ? (
                                            <div className="text-red-900 text-sm mt-2">
                                              {formik.errors.streetAddress}
                                            </div>
                                          ) : undefined}
                                      </div>
                                      <div className="sm:col-span-2 sm:col-start-1">
                                        <Field
                                          as={FormikInput}
                                          label="Country"
                                          placeholder="Country"
                                          name="country"
                                          validate={validateCountry}
                                          formik={formik} // for error
                                          required={true}
                                        />
                                        {formik.touched.country && formik.errors.country ? (
                                          <div className="text-red-900 text-sm mt-2">
                                            {formik.errors.country}
                                          </div>
                                        ) : undefined}
                                      </div>

                                      <div className="sm:col-span-2">
                                        <Field
                                          as={FormikInput}
                                          label="City"
                                          placeholder="City"
                                          name="city"
                                          validate={validateCity}
                                          formik={formik} // for error
                                          required={true}
                                        />
                                        {formik.touched.city && formik.errors.city ? (
                                          <div className="text-red-900 text-sm mt-2">
                                            {formik.errors.city}
                                          </div>
                                        ) : undefined}
                                      </div>
                                      <div className="sm:col-span-2">
                                        <Field
                                          as={FormikInput}
                                          label="Postal code"
                                          placeholder="Posatal code"
                                          name="zip"
                                          validate={validatePostalCode}
                                          formik={formik} // for error
                                          required={true}
                                        />
                                        {formik.touched.zip && formik.errors.zip ? (
                                          <div className="text-red-900 text-sm mt-2">
                                            {formik.errors.zip}
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
                          )}
                        </div>
                      </div>
                    )
                  ) : (
                    <div>
                      <div className="flex flex-col justify-center items-center gap-8">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          Your're almost done!
                        </h2>
                        <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                          Please, check your completed form one more time and press "Confirm" button
                          to complete your registration.
                        </p>
                      </div>
                      <div className="mt-5 space-y-10 divide-y divide-gray-900/10 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 mt-10">
                          <div className="px-4 sm:px-0">
                            <h2 className="text-start text-lg font-semibold leading-7 text-black">
                              Personal Inforamtion
                            </h2>
                            <p className="text-start mt-1 text-sm leading-6 text-black">
                              Please, check your personal information to ensure everything is
                              correct.
                            </p>
                          </div>
                          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                            <div className="px-4 py-6 sm:p-8">
                              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    First name:
                                  </p>
                                  <p className="mt-1 text-black">
                                    {currentState.context.firstName}
                                  </p>
                                </div>
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Last name:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.lastName}</p>
                                </div>
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Date of birth:
                                  </p>
                                  <p className="mt-1 text-black">
                                    {currentState.context.dateOfBirth}
                                  </p>
                                </div>
                                <div className="sm:col-span-3 sm:col-start-1">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Username:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.userName}</p>
                                </div>
                                <div className="sm:col-span-3 sm:col-start-1">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    E-mail:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.eMail}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 py-10">
                          <div className="px-4 sm:px-0">
                            <h2 className="text-start text-lg font-semibold leading-7 text-black">
                              Contact Inforamtion
                            </h2>
                            <p className="text-start mt-1 text-sm leading-6 text-black">
                              Please, check your contact information to ensure everything is
                              correct.
                            </p>
                          </div>
                          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                            <div className="px-4 py-6 sm:p-8">
                              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Phone number:
                                  </p>
                                  <p className="mt-1 text-black">
                                    {currentState.context.phoneNumber}
                                  </p>
                                </div>
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Street address:
                                  </p>
                                  <p className="mt-1 text-black">
                                    {currentState.context.streetAddress}
                                  </p>
                                </div>
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    City:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.city}</p>
                                </div>
                                <div className="sm:col-span-3">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Postal code:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.zip}</p>
                                </div>
                                <div className="sm:col-span-3 sm:col-start-1">
                                  <p className="block text-sm font-medium leading-6 text-black">
                                    Country:
                                  </p>
                                  <p className="mt-1 text-black">{currentState.context.userName}</p>
                                </div>
                              </div>
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
                          <FormikButton type="submit">Confirm</FormikButton>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentState.matches('formSubmitted') && (
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Yoooooo!
                      </h2>
                      <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                        Congratulations! You've successfully finished your registartion.
                      </p>
                      <div className="grid gap-10 w-[300px] m-auto mt-10">
                        <FormikButton
                          type="reset"
                          onClick={() => {
                            send({
                              type: 'RETURN_TO_BEGINNING'
                            });
                          }}>
                          Return to the beginning
                        </FormikButton>
                      </div>
                    </div>
                  )}
                  <Svg />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikApp;
