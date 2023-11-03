import { createMachine, assign } from 'xstate';

const formikValidationFormMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AZhZQDIGoSQAxAGEASgFEAggBVxAfQBy4gOpyAqgGVxohZOriA2gAYAuolAAHArEz5i5kAA9EAWgCMAZgBMrAJwAOADY3AFYQ-18Q3y9orwAaEABPRF9fViD-AHZfTKijfzc3Lw8AXxKEtCwcO1IuWkZmNjAiXDByZig1WDaFVEowQXEFWVEASQUAcXUtUUU9Q1MHKxsah2cEN18PVi8vEIAWTP39o28wrYTkhBd9wL8vDN9AowOjNxeyioxsPEJaqnqTBYrGarXaRE63XIvX6gg0agAQtRRtJpto5vpjGYkCBlrY-mtEB5Aj4vJkSYF-P4QjF-F5DpcUmkMtlcr58oV6Z8QJUfjUyAD6ECmi02h1xJRUJh0INhtpxlNxNRJKNuHJJAARDUSDQaLFLaz4+w49aBdmsTJeTweLL5AIhQKMhAhNysNyBDxFYpBek2h3c3nVP4CmhCxog0XgqASqUy+FIlFyJUqtWa7XiXX6nF41YmxAhI5+d77A5eIz7IoeTJO3ZGN2pEs5d0eSKRAPfIPEEOA8OgsUQgAKDGIYAUAFdKAAjNqykYKuQDgASAHklIo1NQEdos5ZDbnQOsPC9WFFiVSXc8ng6nVXXR4PBejEZMm9Am-21Vfl26mHgX2o0OI7jlOM7xsiqJLqu8gKBuW6iDuuJ7gSebXPSrCHIEIQvHslokm4DJJIgbh0js+HEUebz+HaXhlOUIBEAQAjwDigZfv8oYNCwBorMhB6uPeaS5LcVpuJkESnG4TruB4+ysFWjy3OELy+B+fLBj+nFsJwVC8PwkDcUaRCEqhviukJeGieJnpOqkFpiWJBZGA8VrBKpnbsT2f6Rh0XQ9H0YAGfuThEfsgm+CcHo5KF7LxIRCC2Zk9mZDaLyHA2blsd2v4imC4qStKgW8cFCB4aw+TZN4-gyfsMS+E6+GZOh2H5HST63IlGX8hpwoRrlg7DiwwHTuQhXGnxCAPmkXiUuSxIVslZYhDWhzoeSRy5EeIRVoE+y0SUQA */
    id: 'formikValidationFormMachine',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'formLoaded',
    schema: {
      events: {} as
        | { type: 'CREATE_NEW_USERNAME' }
        | { type: 'SUBMIT_USER_NAME'; value: string }
        | { type: 'ENTERING_USER_NAME' }
        | { type: 'SUBMIT_EMAIL_ADDRESS'; value: string }
        | { type: 'ENTERING_EMAIL_ADDRESS' }
        | { type: 'ENTERING_PHONE_NUMBER' }
        | { type: 'SUBMIT_PHONE_NUMBER'; value: string }
        | { type: 'GO_BACK'; }
        | { type: 'SUBMIT_FORM_COMPLETION'; data: object }
        | { type: 'RETURN_TO_BEGINNING'; }
    },
    context: {
      createUsernameFormInput: '',
      createEmailFormInput: '',
      createPhoneNumberFormInput: ''
    },
    tsTypes: {} as import('./formikValidationFormMachine.typegen').Typegen0,
    states: {
      formLoaded: {
        on: {
          'CREATE_NEW_USERNAME': {
            target: 'enteringUserName'
          }
        }
      },
      enteringUserName: {
        on: {
          'SUBMIT_USER_NAME': {
            actions: 'assignUserNameFormInputToContext',
            target: 'enteringEmail'
          }
        }
      },
      enteringEmail: {
        on: {
          'SUBMIT_EMAIL_ADDRESS': {
            actions: 'assignEmailFormInputToContext',
            target: 'enteringPhoneNumber'
          },
          'GO_BACK': {
            target: 'enteringUserName'
          }
        }
      },
      enteringPhoneNumber: {
        on: {
          'SUBMIT_PHONE_NUMBER': {
            actions: 'assignPhoneNumberFormInputToContext',
            target: 'formCompletion'
          },
          'GO_BACK': {
            target: 'enteringEmail'
          }
        }
      },
      formCompletion: {
        on: {
          'SUBMIT_FORM_COMPLETION': {
            actions: 'clearContextFields',
            target: 'formSubmitted'
          },
          'GO_BACK': {
            target: 'enteringPhoneNumber'
          }
        }
      },
      formSubmitted: {
        on: {
          'RETURN_TO_BEGINNING': {
            target: 'formLoaded'
          }
        }
      }
    }
  },
  {
    actions: {
      assignUserNameFormInputToContext: assign((context, event) => {
        return {
          createUsernameFormInput: event.value
        };
      }),
      assignEmailFormInputToContext: assign((context, event) => {
        return {
          createEmailFormInput: event.value
        };
      }),
      assignPhoneNumberFormInputToContext: assign((context, event) => {
        return {
          createPhoneNumberFormInput: event.value
        };
      }),
      clearContextFields: assign(() => {
        return {
          createUsernameFormInput: '',
          createEmailFormInput: '',
          createPhoneNumberFormInput: ''
        };
      })
    }
  }
);

export default formikValidationFormMachine;


// import { createMachine, assign } from 'xstate';

// const validationFormMachine = createMachine(
//   {
//     /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AZhZQDIGoSQAxAGEASgFEAggBVxAfQBy4gOpyAqgGVxohZOriA2gAYAuolAAHArEz5i5kAA9EAWgCMAZgBMrAJwAOADY3AFYQ-18Q3y9orwAaEABPRF9fViD-AHZfTKijfzc3Lw8AXxKEtCwcO1IuWkZmNjAiXDByZig1WDaFVEowQXEFWVEASQUAcXUtUUU9Q1MHKxsah2cEN18PVi8vEIAWTP39o28wrYTkhBd9wL8vDN9AowOjNxeyioxsPEJaqnqTBYrGarXaRE63XIvX6gg0agAQtRRtJpto5vpjGYkCBlrY-mtEB5Aj4vJkSYF-P4QjF-F5DpcUmkMtlcr58oV6Z8QJUfjUyAD6ECmi02h1xJRUJh0INhtpxlNxNRJKNuHJJAARDUSDQaLFLaz4+w49aBdmsTJeTweLL5AIhQKMhAhNysNyBDxFYpBek2h3c3nVP4CmhCxog0XgqASqUy+FIlFyJUqtWa7XiXX6nF41YmxAhI5+d77A5eIz7IoeTJO3ZGN2pEs5d0eSKRAPfIPEEOA8OgsUQgAKDGIYAUAFdKAAjNqykYKuQDgASAHklIo1NQEdos5ZDbnQOsPC9WFFiVSXc8ng6nVXXR4PBejEZMm9Am-21Vfl26mHgX2o0OI7jlOM7xsiqJLqu8gKBuW6iDuuJ7gSebXPSrCHIEIQvHslokm4DJJIgbh0js+HEUebz+HaXhlOUIBEAQAjwDigZfv8oYNCwBorMhB6uPeaS5LcVpuJkESnG4TruB4+ysFWjy3OELy+B+fLBj+nFsJwVC8PwkDcUaRCEqhviukJeGieJnpOqkFpiWJBZGA8VrBKpnbsT2f6Rh0XQ9H0YAGfuThEfsgm+CcHo5KF7LxIRCC2Zk9mZDaLyHA2blsd2v4imC4qStKgW8cFCB4aw+TZN4-gyfsMS+E6+GZOh2H5HST63IlGX8hpwoRrlg7DiwwHTuQhXGnxCAPmkXiUuSxIVslZYhDWhzoeSRy5EeIRVoE+y0SUQA */
//     id: 'validationFormMachine',
//     predictableActionArguments: true,
//     preserveActionOrder: true,
//     initial: 'formLoaded',
//     schema: {
//       // events: {} as
//       //   | { type: 'Form loaded' }
//       //   | { type: 'Form loading failed' }
//       //   | { type: 'Create new username' }
//       // services: {} as {
//       //   loadForm: {
//       //     data: void;
//       //   };
//       // },
//       events: {} as
//         | { type: 'CREATE_NEW_USERNAME' }
//         | { type: 'SUBMIT_USER_NAME' }
//         | { type: 'ENTERING_USER_NAME'; value: string }
//         | { type: 'SUBMIT_EMAIL_ADDRESS' }
//         | { type: 'ENTERING_EMAIL_ADDRESS'; value: string }
//         | { type: 'ENTERING_PHONE_NUMBER'; value: number }
//         | { type: 'SUBMIT_PHONE_NUMBER'; }
//         | { type: 'GO_BACK'; }
        
//     },
//     context: {
//       errorMessage: undefined as string | undefined,
//       createUsernameFormInput: '',
//       createEmailFormInput: '',
//       createPhoneNumberFormInput: 0
//     },
//     tsTypes: {} as import('./validationFormMachine.typegen').Typegen0,
//     states: {
//       // 'Loading form': {
//       //   invoke: {
//       //     src: 'loadForm',
//       //     onDone: {
//       //       target: 'Form loaded'
//       //     },
//       //     onError: {
//       //       target: 'Form loading errored',
//       //       actions: 'assignErrorToContext'
//       //     }
//       //   }
//       // },
//       formLoaded: {
//         on: {
//           CREATE_NEW_USERNAME: {
//             target: 'enteringUserName'
//           }
//         }
//       },
//       enteringUserName: {
//         // initial: 'Showing username form input',
//         // states: {
//         //   'Showing username form input': {
//         on: {
//           'ENTERING_USER_NAME': {
//             actions: 'assignUserNameFormInputToContext'
//           },
//           'SUBMIT_USER_NAME': {
//             target: 'enteringEmail'
//           }
//         }
//         //   }
//         // }
//       },
//       enteringEmail: {
//         on: {
//           'ENTERING_EMAIL_ADDRESS': {
//             actions: 'assignEmailFormInputToContext'
//           },
//           'SUBMIT_EMAIL_ADDRESS': {
//             target: 'enteringPhoneNumber'
//           },
//           'GO_BACK': {
//             target: 'enteringUserName',
//             actions: 'returnUserName'
//           }
//         }
//       },
//       enteringPhoneNumber: {
//         on: {
//           'ENTERING_PHONE_NUMBER': {
//             actions: 'assignPhoneNumberFormInputToContext'
//           },
//           'SUBMIT_PHONE_NUMBER': {
//             target: ''
//           },
//           'GO_BACK': {
//             target: 'enteringUserName',
//             actions: 'returnEmailAddress'
//           }
//         }
//       }
//     }
//   },
//   {
//     actions: {
//       // assignErrorToContext: assign((context, event) => {
//       //   return {
//       //     errorMessage: (event.data as Error).message
//       //   };
//       // }),
//       assignUserNameFormInputToContext: assign((context, event) => {
//         return {
//           createUsernameFormInput: event.value
//         };
//       }),
//       assignEmailFormInputToContext: assign((context, event) => {
//         return {
//           createEmailFormInput: event.value
//         };
//       }),
//       assignPhoneNumberFormInputToContext: assign((context, event) => {
//         return {
//           createPhoneNumberFormInput: event.value
//         };
//       }),
//       returnUserName: (context, event) => {
//         console.log(context.createUsernameFormInput);
//         return context.createUsernameFormInput.valueOf;
//       },
//       returnEmailAddress: (context, event) => {
//         console.log(context.createEmailFormInput);
//         return context.createEmailFormInput;
//       }
//     }
//   }
// );

// export default validationFormMachine;