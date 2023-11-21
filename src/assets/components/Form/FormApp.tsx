import FormValues from '../../types/FormValues';
import validationFormMachine from '../../machines/validationFormMachine';
import { useMachine } from '@xstate/react';
import { Formik, Form } from 'formik';
import EnteringEmailFormPart from './EnteringEmailFormPart';
import EnteringPersonalInfoFormPart from './EnteringPersonalInfoFormPart';
import EnteringContactInfoFormPart from './EnteringContactInfoFormPart';
import FormCompletionFormPart from './FormCompletionFormPart';
import FormSubmittedFormPart from './FormSubmittedFormPart';
import Svg from '../../images/Svg';

function FormApp() {
  const [currentState, send] = useMachine(validationFormMachine, {
    services: {},
    devTools: true
  });
  
  const initialValues = {
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
  };

  const onSubmit = (values: FormValues, { resetForm }) => {
    send({
      type: 'SUBMIT_FORM_COMPLETION'
    });
    resetForm({initialValues});
  };

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialValues} // Not to re-render form on mount and set "isValid" to false. - https://github.com/jaredpalmer/formik/issues/2172
      onSubmit={onSubmit}>
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
                            <EnteringEmailFormPart formik={formik} send={send} /> 
                          )}
                          {currentState.matches('enteringPersonalInfo.active') && (
                            <EnteringPersonalInfoFormPart formik={formik} send={send} />
                          )}
                          {currentState.matches('enteringContactInfo') && (
                            <EnteringContactInfoFormPart formik={formik} send={send} />
                          )}
                        </div>
                      </div>
                    )
                  ) : (
                    currentState.matches('formCompletion') && 
                    <FormCompletionFormPart currentState={currentState} send={send} />
                  )}
                  {currentState.matches('formSubmitted') && (
                    <FormSubmittedFormPart send={send} />
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

export default FormApp;
