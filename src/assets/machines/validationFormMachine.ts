import { createMachine, assign } from 'xstate';

const validationFormMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AZhZQDIGoSQAxAGEASgFEAggBVxAfQBy4gOpyAqgGVxohZOriA2gAYAuolAAHArEz5i5kAA9EAWgCMAZgBMrAJwAOADY3AFYQ-18Q3y9orwAaEABPRF9fViD-AHZfTKijfzc3Lw8AXxKEtCwcO1IuWkZmNjAiXDByZig1WDaFVEowQXEFWVEASQUAcXUtUUU9Q1MHKxsah2cEN18PVi8vEIAWTP39o28wrYTkhBd9wL8vDN9AowOjNxeyioxsPEJaqnqTBYrGarXaRE63XIvX6gg0agAQtRRtJpto5vpjGYkCBlrY-mtEB5Aj4vJkSYF-P4QjF-F5DpcUmkMtlcr58oV6Z8QJUfjUyAD6ECmi02h1xJRUJh0INhtpxlNxNRJKNuHJJAARDUSDQaLFLaz4+w49aBdmsTJeTweLL5AIhQKMhAhNysNyBDxFYpBek2h3c3nVP4CmhCxog0XgqASqUy+FIlFyJUqtWa7XiXX6nF41YmxAhI5+d77A5eIz7IoeTJO3ZGN2pEs5d0eSKRAPfIPEEOA8OgsUQgAKDGIYAUAFdKAAjNqykYKuQDgASAHklIo1NQEdos5ZDbnQOsPC9WFFiVSXc8ng6nVXXR4PBejEZMm9Am-21Vfl26mHgX2o0OI7jlOM7xsiqJLqu8gKBuW6iDuuJ7gSebXPSrCHIEIQvHslokm4DJJIgbh0js+HEUebz+HaXhlOUIBEAQAjwDigZfv8oYNCwBorMhB6uPeaS5LcVpuJkESnG4TruB4+ysFWjy3OELy+B+fLBj+nFsJwVC8PwkDcUaRCEqhviukJeGieJnpOqkFpiWJBZGA8VrBKpnbsT2f6Rh0XQ9H0YAGfuThEfsgm+CcHo5KF7LxIRCC2Zk9mZDaLyHA2blsd2v4imC4qStKgW8cFCB4aw+TZN4-gyfsMS+E6+GZOh2H5HST63IlGX8hpwoRrlg7DiwwHTuQhXGnxCAPmkXiUuSxIVslZYhDWhzoeSRy5EeIRVoE+y0SUQA */
    id: 'validationFormMachine',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'enteringEmail',
    schema: {
      events: {} as
        | { type: 'CREATE_NEW_USERNAME' }
        | { type: 'SUBMIT_PERSONAL_INFO' /* values: object */ }
        | { type: 'ENTERING_USER_NAME' }
        | { type: 'SUBMIT_EMAIL_ADDRESS' /* value: string */ }
        | { type: 'ENTERING_EMAIL_ADDRESS' }
        | { type: 'ENTERING_PHONE_NUMBER' }
        | { type: 'SUBMIT_CONTACT_INFO'; values: object }
        | { type: 'GO_BACK' }
        | { type: 'SUBMIT_FORM_COMPLETION' /* values: object */ }
        | { type: 'RETURN_TO_BEGINNING' }
    },
    context: {
      eMail: '',
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      country: '',
      userName: '',
      phoneNumber: null,
      streetAddress: '',
      city: '',
      zip: ''
    },
    tsTypes: {} as import('./validationFormMachine.typegen').Typegen0,
    states: {
      enteringEmail: {
        id: 'enteringEmail',
        initial: 'active',
        states: {
          active: {
            on: {
              SUBMIT_EMAIL_ADDRESS: {
                target: '#enteringPersonalInfo.active'
              }
            }
          },
          hist: {
            type: 'history',
            history: 'shallow'
          }
        }
      },
      enteringPersonalInfo: {
        id: 'enteringPersonalInfo',
        initial: 'active',
        states: {
          active: {
            on: {
              SUBMIT_PERSONAL_INFO: {
                target: '#enteringContactInfo.active'
              },
              GO_BACK: {
                target: '#enteringEmail.hist'
              }
            }
          },
          hist: {
            type: 'history',
            history: 'shallow'
          }
        }
      },
      enteringContactInfo: {
        id: 'enteringContactInfo',
        initial: 'active',
        states: {
          active: {
            on: {
              SUBMIT_CONTACT_INFO: {
                actions: 'assignValuesToContext',
                target: '#formCompletion'
              },
              GO_BACK: {
                actions: 'clearContext',
                target: '#enteringPersonalInfo.hist'
              }
            }
          },
          hist: {
            type: 'history',
            history: 'shallow'
          }
        }
      },
      formCompletion: {
        id: 'formCompletion',
        on: {
          SUBMIT_FORM_COMPLETION: {
            actions: 'clearContext',
            target: '#formSubmitted'
          },
          GO_BACK: {
            target: '#enteringContactInfo.hist'
          }
        }
      },
      formSubmitted: {
        id: 'formSubmitted',
        on: {
          RETURN_TO_BEGINNING: {
            target: '#enteringEmail.active'
          }
        }
      }
    }
  },
  {
    actions: {
      assignValuesToContext: assign((context, event) => {
        return {
          eMail: event.values.eMail,
          firstName: event.values.firstName,
          lastName: event.values.lastName,
          dateOfBirth: event.values.dateOfBirth,
          country: event.values.country,
          userName: event.values.userName,
          phoneNumber: event.values.phoneNumber,
          streetAddress: event.values.streetAddress,
          city: event.values.city,
          zip: event.values.zip
        };
      }),
      clearContext: assign(() => {
        return {
          eMail: '',
          firstName: '',
          lastName: '',
          dateOfBirth: null,
          country: '',
          userName: '',
          phoneNumber: null,
          streetAddress: '',
          city: '',
          zip: ''
        };
      })
    }
  }
);

export default validationFormMachine;
