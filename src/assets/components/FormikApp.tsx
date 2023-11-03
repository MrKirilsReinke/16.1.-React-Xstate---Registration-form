import formikValidationFormMachine from '../machines/formikValidationFormMachine';
import { useMachine } from '@xstate/react';
import FormikInput from './Input/FormikInput';
import FormikButton from './Button/FormikButton';
import Svg from '../images/Svg';
import { Formik, Field, Form } from 'formik';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

interface FormValues {
  userName: string;
  eMail: string;
  phoneNumber: string;
}

function FormikApp() {
  const [currentState, send] = useMachine(formikValidationFormMachine, {
    services: {},
    devTools: true
  });

  const validateUserName = value => {
    let error;

    if (!value) {
      error = 'Fill this field';
    } else if (value.length > 15) {
      error = 'Must be 15 characters or less';
    }

    return error;
  };

  const validateEmail = value => {
    let error;

    if (!value) {
      error = 'Fill this field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }

    return error;
  };

  const validatePhoneNumber = value => {
    let error;

    if (!value) {
      error = 'Fill this field';
    } else if (!/^\d{10}$/i.test(value)) {
      error = 'Invalid phone number. Please enter a 10-digit number.';
    }

    return error;
  };

  // const onSubmit = () => {
  //   send({
  //     type: 'SUBMIT_FORM_COMPLETION',
  //     data: values
  //   });
  // };

  return (
    <div className="bg-gray-900 py-16 sm:py-24 h-screen">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Formik
          initialValues={{
            firstNasme: '',
            lastName: '',
            userName: '',
            eMail: '',
            repeateMail: '',
            telephoneIndex: '',
            phoneNumber: '',
            country: '',
            streetAddress: '',
            city: '',
            state: ''
          }}
          onSubmit={(values: FormValues, { setSubmitting }) => {
            setSubmitting(true);
            send({
              type: 'SUBMIT_FORM_COMPLETION',
              data: values
            });
            setSubmitting(false);
          }}
          // onSubmit={onSubmit}
        >
          {formik => {
            console.log('formik props', formik);
            return (
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
                {currentState.matches('formLoaded') ? (
                  <div className="grid grid-flow-row gap-10 justify-center">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Press "Start" button to begin registration
                    </h2>
                    <button
                      type="button"
                      className="place-self-center w-[130px] rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                      onClick={() => {
                        send({
                          type: 'CREATE_NEW_USERNAME'
                        });
                      }}>
                      Start
                    </button>
                  </div>
                ) : !currentState.matches('formCompletion') ? (
                  !currentState.matches('formSubmitted') && (
                    <div>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          Current step:
                        </h2>
                        <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                          {JSON.stringify(currentState.value)}
                        </p>
                        <pre>{JSON.stringify(currentState.context)}</pre>

                        {currentState.matches('enteringUserName') && (
                          <Form>
                            <div className="space-y-10 divide-y divide-gray-900/10">
                              <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                                <div className="px-4 sm:px-0">
                                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    Personal Information
                                  </h2>
                                  <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Use a permanent address where you can receive mail.
                                  </p>
                                </div>

                                <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                  <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                      <div className="sm:col-span-3">
                                        <div>
                                          <Field as={FormikInput}
                                            label='Username'
                                            id="userName"
                                            placeholder="My Username"
                                            name="userName"
                                            validate={validateUserName}
                                          />
                                          <div className='mt-2'>
                                            {formik.errors.userName ? (
                                              <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                            ) : null}
                                          </div>
                                        </div>
                                      </div>

                                      <div className="sm:col-span-3">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="sm:col-span-4">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="sm:col-span-4">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="col-span-full">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="sm:col-span-2 sm:col-start-1">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="sm:col-span-2">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>

                                      <div className="sm:col-span-2">
                                        <Field as={FormikInput}
                                          label='Username'
                                          id="userName"
                                          placeholder="My Username"
                                          name="userName"
                                          validate={validateUserName}
                                        />
                                        <div className='mt-2'>
                                          {formik.errors.userName ? (
                                            <div className="text-red-900 text-sm">{formik.errors.userName}</div>
                                          ) : null}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <button
                                      type="button"
                                      className="text-sm font-semibold leading-6 text-gray-900">
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                      Save
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Form>
                        )}

                        {currentState.matches('enteringEmail') && (
                          <div className="grid grid-flow-row gap-5 justify-center">
                            <Field
                              as={FormikInput}
                              id="eMail"
                              placeholder="My Email"
                              name="eMail"
                              type="email"
                              validate={validateEmail}
                            />

                            {formik.errors.eMail ? (
                              <div className="text-red-900">{formik.errors.eMail}</div>
                            ) : null}

                            <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
                              <FormikButton
                                onClick={() => {
                                  send({
                                    type: 'GO_BACK'
                                  });
                                }}>
                                Back
                              </FormikButton>
                              <FormikButton
                                onClick={() => {
                                  send({
                                    type: 'SUBMIT_EMAIL_ADDRESS',
                                    value: formik.values.eMail
                                  });
                                }}>
                                Next
                              </FormikButton>
                            </div>
                          </div>
                        )}

                        {currentState.matches('enteringPhoneNumber') && (
                          <div className="grid grid-flow-row gap-5 justify-center">
                            <Field
                              as={FormikInput}
                              placeholder="My phone number"
                              name="phoneNumber"
                              validate={validatePhoneNumber}
                            />

                            {formik.errors.phoneNumber ? (
                              <div className="text-red-900">{formik.errors.phoneNumber}</div>
                            ) : null}

                            <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
                              <FormikButton
                                onClick={() => {
                                  send({
                                    type: 'GO_BACK'
                                  });
                                }}>
                                Back
                              </FormikButton>
                              <FormikButton
                                onClick={() => {
                                  send({
                                    type: 'SUBMIT_PHONE_NUMBER',
                                    value: formik.values.phoneNumber
                                  });
                                }}>
                                Next
                              </FormikButton>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                ) : (
                  <div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                        {JSON.stringify(currentState.value)}
                      </p>
                      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Your're almost done!
                      </h2>
                      <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                        Please, check your competed form one more time and press "Confirm" button to
                        complete your registration.
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <p className="block text-sm font-medium leading-6 text-gray-300">
                            Username:
                          </p>
                          <p className="mt-1 text-gray-300">
                            {currentState.context.createUsernameFormInput}
                            {/* {userName} */}
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <p className="block text-sm font-medium leading-6 text-gray-300">
                            E-mail address:
                          </p>
                          <p className="mt-1 text-gray-300">
                            {currentState.context.createEmailFormInput}
                            {/* {eMail} */}
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <p className="block text-sm font-medium leading-6 text-gray-300">
                            Phone number:
                          </p>
                          <p className="mt-1 text-gray-300">
                            {currentState.context.createPhoneNumberFormInput}
                            {/* {phoneNumber} */}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-10">
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
                    <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                      {JSON.stringify(currentState.value)}
                    </p>
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Yoooooo!
                    </h2>
                    <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                      Congratulations! You've successfully finished your registartion.
                    </p>
                    <div className="grid gap-10 w-[300px] m-auto mt-10">
                      <FormikButton
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
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormikApp;

// import formikValidationFormMachine from '../machines/formikValidationFormMachine';
// import { useMachine } from '@xstate/react';
// import FormikInput from './Input/FormikInput';
// import FormikButton from './Button/FormikButton';
// import Svg from '../images/Svg';
// import { useFormik } from 'formik';

// interface FormValues {
//   userName: string;
//   eMail: string;
//   phoneNumber: string;
// }

// function FormikApp() {
//   const [currentState, send] = useMachine(formikValidationFormMachine, {
//     services: {},
//     devTools: true
//   });

//   const validate = (values: FormValues) => {
//     const errors: any = {};

//     if (!values.userName) {
//       errors.userName = 'Required';
//     } else if (values.userName.length > 15) {
//       errors.userName = 'Must be 15 characters or less';
//     }

//     if (!values.phoneNumber) {
//       errors.phoneNumber = 'Required';
//     } else if (values.userName.length > 20) {
//       errors.phoneNumber = 'Must be 20 characters or less';
//     }

//     if (!values.eMail) {
//       errors.eMail = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.eMail)) {
//       errors.eMail = 'Invalid email address';
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       eMail: '',
//       phoneNumber: ''
//     },
//     validate,
//     onSubmit: (values) => {
//       // send({
//       //   type: 'SUBMIT_FORM_COMPLETION',
//       //   data: values
//       // });
//       console.log(values);
//     }

//     // onSubmit: values => {
//     //   console.log('values are:', values);
//     // }

//     // onSubmit: values => {
//     //   alert(JSON.stringify(values, null, 2));
//     // }

//     // onSubmit={() => {
//     //   console.log('submit')
//     // }}
//   });

//   return (
//     <div className="bg-gray-900 py-16 sm:py-24 h-screen">
//       <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <form
//           onSubmit={formik.handleSubmit}
//           className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
//           {currentState.matches('formLoaded') ? (
//             <div className="grid grid-flow-row gap-10 justify-center">
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Press "Start" button to begin registration
//               </h2>
//               <button
//                 type="button"
//                 className="place-self-center w-[130px] rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
//                 onClick={() => {
//                   send({
//                     type: 'CREATE_NEW_USERNAME'
//                   });
//                 }}>
//                 Start
//               </button>
//             </div>
//           ) : !currentState.matches('formCompletion') ? (
//             !currentState.matches('formSubmitted') && (
//               <div>
//                 <div className="flex flex-col justify-center items-center">
//                   <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                     Current step:
//                   </h2>
//                   <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                     {JSON.stringify(currentState.value)}
//                   </p>
//                   <pre>{JSON.stringify(currentState.context)}</pre>

//                   {currentState.matches('enteringUserName') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <FormikInput
//                         placeholder="My username"
//                         name="userName"
//                         value={formik.values.userName}
//                         onChange={formik.handleChange}
//                       />

//                       {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}

//                       <div className="m-auto mt-2 w-[130px]">
//                         <FormikButton
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_USER_NAME',
//                               value: formik.values.userName
//                             });
//                           }}>
//                           Next
//                         </FormikButton>
//                       </div>
//                     </div>
//                   )}

//                   {currentState.matches('enteringEmail') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <FormikInput
//                         placeholder="My Email"
//                         name="eMail"
//                         value={formik.values.eMail}
//                         onChange={formik.handleChange}
//                       />

//                       {formik.errors.eMail ? <div>{formik.errors.eMail}</div> : null}

//                       <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
//                         <FormikButton
//                           onClick={() => {
//                             send({
//                               type: 'GO_BACK'
//                             });
//                           }}>
//                           Back
//                         </FormikButton>
//                         <FormikButton
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_EMAIL_ADDRESS',
//                               value: formik.values.eMail
//                             });
//                           }}>
//                           Next
//                         </FormikButton>
//                       </div>
//                     </div>
//                   )}

//                   {currentState.matches('enteringPhoneNumber') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <FormikInput
//                         placeholder="My phone number"
//                         name="phoneNumber"
//                         value={formik.values.phoneNumber}
//                         onChange={formik.handleChange}
//                         // value={phoneNumber}
//                         // onChange={(e) => {
//                         //   setPhoneNumber(e.target.value);
//                         // }}
//                       />
//                       <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
//                         <FormikButton
//                           onClick={() => {
//                             send({
//                               type: 'GO_BACK'
//                             });
//                           }}>
//                           Back
//                         </FormikButton>
//                         <FormikButton
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_PHONE_NUMBER',
//                               value: formik.values.phoneNumber
//                             });
//                           }}>
//                           Next
//                         </FormikButton>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           ) : (
//             <div>
//               <div className="flex flex-col justify-center items-center">
//                 <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                   {JSON.stringify(currentState.value)}
//                 </p>
//                 <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                   Your're almost done!
//                 </h2>
//                 <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                   Please, check your competed form one more time and press "Confirm" button to
//                   complete your registration.
//                 </p>

//                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">Username:</p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createUsernameFormInput}
//                       {/* {userName} */}
//                     </p>
//                   </div>

//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">
//                       E-mail address:
//                     </p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createEmailFormInput}
//                       {/* {eMail} */}
//                     </p>
//                   </div>

//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">
//                       Phone number:
//                     </p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createPhoneNumberFormInput}
//                       {/* {phoneNumber} */}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-10">
//                   <FormikButton
//                     onClick={() => {
//                       send({
//                         type: 'GO_BACK'
//                       });
//                     }}>
//                     Back
//                   </FormikButton>
//                   <button type="submit">Confirm</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {currentState.matches('formSubmitted') && (
//             <div className="flex flex-col justify-center items-center">
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 {JSON.stringify(currentState.value)}
//               </p>
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Yoooooo!
//               </h2>
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 Congratulations! You've successfully finished your registartion.
//               </p>
//               <div className="grid gap-10 w-[300px] m-auto mt-10">
//                 <FormikButton
//                   onClick={() => {
//                     send({
//                       type: 'RETURN_TO_BEGINNING'
//                     });
//                   }}>
//                   Return to the beginning
//                 </FormikButton>
//               </div>
//             </div>
//           )}
//           <Svg />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormikApp;

// import validationFormMachine from '../machines/validationFormMachine';
// import { useMachine } from '@xstate/react';
// import Input from './Input/Input';
// import Button from './Button/Button';
// import Svg from '../images/Svg';

// function App() {
//   const [currentState, send] = useMachine(validationFormMachine, {
//     services: {},
//     devTools: true
//   });

//   return (
//     <div className="bg-gray-900 py-16 sm:py-24 h-screen">
//       <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             send({
//               type: 'SUBMIT_FORM_COMPLETION'
//             });
//           }}
//           className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
//           {currentState.matches('formLoaded') ? (
//             <div className="grid grid-flow-row gap-10 justify-center">
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Press "Start" button to begin registration
//               </h2>
//               <button
//                 type="button"
//                 className="place-self-center w-[130px] rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
//                 onClick={() => {
//                   send({
//                     type: 'CREATE_NEW_USERNAME'
//                   });
//                 }}>
//                 Start
//               </button>
//             </div>
//           ) : !currentState.matches('formCompletion') ? (
//             !currentState.matches('formSubmitted') && (
//               <div>
//                 <div className="flex flex-col justify-center items-center">
//                   <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                     Current step:
//                   </h2>
//                   <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                     {JSON.stringify(currentState.value)}
//                   </p>
//                   <pre>{JSON.stringify(currentState.context)}</pre>

//                   {currentState.matches('enteringUserName') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <Input
//                         placeholder="My username"
//                         value={currentState.context.createUsernameFormInput}
//                         onChange={(type, e) => {
//                           send({
//                             type: 'ENTERING_USER_NAME',
//                             value: e.target.value
//                           });
//                         }}
//                       />
//                       <div className="m-auto mt-2 w-[130px]">
//                         <Button
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_USER_NAME'
//                             });
//                           }}>
//                           Next
//                         </Button>
//                       </div>
//                     </div>
//                   )}

//                   {currentState.matches('enteringEmail') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <Input
//                         placeholder="My Email"
//                         value={currentState.context.createEmailFormInput}
//                         onChange={(type, e) => {
//                           send({
//                             type: 'ENTERING_EMAIL_ADDRESS',
//                             value: e.target.value
//                           });
//                         }}
//                       />
//                       <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
//                         <Button
//                           onClick={() => {
//                             send({
//                               type: 'GO_BACK'
//                             });
//                           }}>
//                           Back
//                         </Button>
//                         <Button
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_EMAIL_ADDRESS'
//                             });
//                           }}>
//                           Next
//                         </Button>
//                       </div>
//                     </div>
//                   )}

//                   {currentState.matches('enteringPhoneNumber') && (
//                     <div className="grid grid-flow-row gap-5 justify-center">
//                       <Input
//                         placeholder="My phone number"
//                         type="text"
//                         value={currentState.context.createPhoneNumberFormInput}
//                         onChange={(type, e) => {
//                           // setPhoneNumberInput(e.target.value);
//                           send({
//                             type: 'ENTERING_PHONE_NUMBER',
//                             value: e.target.value
//                           });
//                         }}
//                       />
//                       <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
//                         <Button
//                           onClick={() => {
//                             send({
//                               type: 'GO_BACK'
//                             });
//                           }}>
//                           Back
//                         </Button>
//                         <Button
//                           onClick={() => {
//                             send({
//                               type: 'SUBMIT_PHONE_NUMBER'
//                             });
//                           }}>
//                           Next
//                         </Button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           ) : (
//             <div>
//               <div className="flex flex-col justify-center items-center">
//                 <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                   {JSON.stringify(currentState.value)}
//                 </p>
//                 <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                   Your're almost done!
//                 </h2>
//                 <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                   Please, check your competed form one more time and press "Confirm" button to
//                   complete your registration.
//                 </p>

//                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">Username:</p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createUsernameFormInput}
//                     </p>
//                   </div>

//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">
//                       E-mail address:
//                     </p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createEmailFormInput}
//                     </p>
//                   </div>

//                   <div className="sm:col-span-3">
//                     <p className="block text-sm font-medium leading-6 text-gray-300">
//                       Phone number:
//                     </p>
//                     <p className="mt-1 text-gray-300">
//                       {currentState.context.createPhoneNumberFormInput}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-10">
//                   <Button
//                     onClick={() => {
//                       send({
//                         type: 'GO_BACK'
//                       });
//                     }}>
//                     Back
//                   </Button>
//                   <Button
//                     type='submit'
//                   >
//                     Confirm
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {currentState.matches('formSubmitted') && (
//             <div className="flex flex-col justify-center items-center">
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 {JSON.stringify(currentState.value)}
//               </p>
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Yoooooo!
//               </h2>
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 Congratulations!
//                 You've successfully finished your registartion.
//               </p>
//               <div className="grid gap-10 w-[300px] m-auto mt-10">
//                 <Button
//                   onClick={() => {
//                     send({
//                       type: 'RETURN_TO_BEGINNING'
//                     });
//                   }}>
//                     Return to the beginning
//                 </Button>
//               </div>
//             </div>
//           )}
//           <Svg />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useMachine } from '@xstate/react';
// // import UsernameInput from './FormInput/UsernameInput';
// // import EmailInput from './FormInput/EmailInput';
// // import PhoneNumberInput from './FormInput/PhoneNumberInput';
// import validationFormMachine from '../machines/validationFormMachine';
// import FormInput from './FormInput';

// import Svg from '../images/Svg';

// function App() {
//   const [currentState, send] = useMachine(validationFormMachine, {
//     services: {
//       // loadForm: async () => {
//       //   // throw new Error('heeey'),
//       //   console.log('form is loaded');
//       // }
//     },
//     devTools: true
//   });

//   return (
//     <div className="bg-gray-900 py-16 sm:py-24 h-screen">
//       <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">

//           {currentState.matches('formLoaded') && (
//             <div className="grid grid-flow-row gap-10 justify-center">
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Press "Start" button to begin registration
//               </h2>
//               <button
//                 type="button"
//                 className="place-self-center w-[150px] rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
//                 onClick={() => {
//                   send({
//                     type: 'CREATE_NEW_USERNAME'
//                   });
//                 }}>
//                 Start
//               </button>
//               <Svg />
//             </div>
//           )}

//           {/* {currentState.matches('Creating new username.Showing username form input') && (
//             <UsernameInput
//             currentState={currentState}
//             send={send}
//             >
//           )} */}

//           {/* {currentState.matches('enteringUserName') && ( */}
//           <div>
//             <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Current step:
//             </h2>
//             <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//               {JSON.stringify(currentState.value)}
//             </p>
//             <pre>{JSON.stringify(currentState.context)}</pre>

//             {/* <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
//                 placeholder="My Username"
//                 onChange={(e) => {
//                   send({
//                     type: 'ENTERING_USER_NAME',
//                     value: e.target.value
//                   });
//                 }}
//               /> */}
//             {currentState.matches('enteringUserName') && (
//               <FormInput
//                 placeholder="My Username"

//                 onChange={(type, e) => {
//                   send({
//                     type: 'ENTERING_USER_NAME',
//                     value: e.target.value
//                   });
//                 }}
//               />
//             )}

//             <Svg />
//             <div className="grid gap-10 w-[300px] m-auto mt-10">
//               <button
//                 onClick={() => {
//                   send({
//                     type: 'SUBMIT_USER_NAME'
//                   });
//                 }}
//                 type="button"
//                 className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
//                   Next
//               </button>
//             </div>
//           </div>
//           {/* )} */}

//           {currentState.matches('enteringEmail') && (
//             <div>
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Current step:
//               </h2>
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 {JSON.stringify(currentState.value)}
//               </p>
//               <pre>{JSON.stringify(currentState.context)}</pre>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 required
//                 className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
//                 placeholder="My Username"
//                 onChange={(e) => {
//                   send({
//                     type: 'ENTERING_EMAIL_ADDRESS',
//                     value: e.target.value
//                   });
//                 }}
//               />
//               <Svg />
//               <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-10">
//                 <button
//                   // onClick={() => {
//                   //   send({
//                   //     type: 'SUBMIT_EMAIL_ADDRESS'
//                   //   });
//                   // }}
//                   type="button"
//                   className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
//                   Back
//                 </button>

//                 <button
//                   onClick={() => {
//                     send({
//                       type: 'SUBMIT_EMAIL_ADDRESS'
//                     });
//                   }}
//                   type="button"
//                   className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {currentState.matches('enteringPhoneNumber') && (
//             <div>
//               <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 Current step:
//               </h2>
//               <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
//                 {JSON.stringify(currentState.value)}
//               </p>
//               <pre>{JSON.stringify(currentState.context)}</pre>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="number"
//                 required
//                 className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
//                 placeholder="My Username"
//                 onChange={(e) => {
//                   send({
//                     type: 'ENTERING_PHONE_NUMBER',
//                     value: e.target.value
//                   });
//                 }}
//               />
//               <Svg />
//               <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-10">
//                 <button
//                   // onClick={() => {
//                   //   send({
//                   //     type: 'SUBMIT_USER_NAME'
//                   //   });
//                   // }}
//                   type="button"
//                   className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
//                   Back
//                 </button>

//                 <button
//                   onClick={() => {
//                     send({
//                       type: 'SUBMIT_PHONE_NUMBER'
//                     });
//                   }}
//                   type="button"
//                   className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;