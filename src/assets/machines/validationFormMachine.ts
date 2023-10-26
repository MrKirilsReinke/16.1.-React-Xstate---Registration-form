import { createMachine, assign } from 'xstate';

const validationFormMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AMgahM1AAQAzCpQDEEYm2bICAazZosOfMTJVajZm07deg4QikE6eQkQDaABgC6lq4lAAHArEzKi9kAA9EAJgAsFqx+fgAcAJwhfj4WAMwxAKwAbGFhADQgAJ6IAIwhIawA7DEW2RZ+BQU+iVUh8QC+dekK2CYqwupMLBxcPET8QlQiYOTkFKwO6HgDlKzNSqaqNPSdWj260wZE0sZutrYeTi5uHt4IkazxYdkxIQUWBbeR4elZCD7xMaw1iRWJFldFMoNJoYFpuRYdTSsRZ8dA9SAiADC5DAeDAfBYAHc+ABXWDDIioShgfZIECHVymE6IJI+VjZRLxMrvaLXRIvXxJVgAsrheI+SIFbL1RogOatUjtZZQ5Go-B9DFgbF4glEtgAZQYBExuhV5EJxL0VD4zAcONwIgAqvj9Wq+ABJIhm3B8RioPqQUmOZyU4jUhCJEKJL7xEIxYUFRLZMI+NKZRBRz4hHyx+6Riw+GIphqiogECBwDzi8FSjQsA4+45k04AWmyfnpd3id38MUSP2C2Q5b3i3LK8VywvK8WCPgKwLFoPmbTU0q62l6-WEFaOVOriCi3ey1y+Y6i8VDBQ+UZ8E+LC1LK2hwlh8IgK997nXCD8WYuWeyQqq+788S3QdYPJI2bflSgFM8pwlCE5zYWUTAVLFcRtA0wAfKtQFOX8CkAm5rlqBJI1jPxuxiIpWBiFJEj8T8Pn8aMIMUKDLxlFF4P4RC9RQ1hNW1XVkLtaYTSdc00LXDCaQsXswxCPCPmbaowmI+MXz+QoU0uI9-kqZs-AYsEL1nMs2BhOEdAVYZRhRe8yQpdCvEQOJAKI2Mj0SOJ3nZZSKODflAyo0jrjbEUGiAA */
    id: 'validationFormMachine',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'formLoaded',
    schema: {
      // events: {} as
      //   | { type: 'Form loaded' }
      //   | { type: 'Form loading failed' }
      //   | { type: 'Create new username' }
      // services: {} as {
      //   loadForm: {
      //     data: void;
      //   };
      // },
      events: {} as
        | { type: 'CREATE_NEW_USERNAME' }
        | { type: 'SUBMIT_USER_NAME' }
        | { type: 'ENTERING_USER_NAME'; value: string }
        | { type: 'SUBMIT_EMAIL_ADDRESS' }
        | { type: 'ENTERING_EMAIL_ADDRESS'; value: string }
        | { type: 'ENTERING_PHONE_NUMBER'; value: number }
        | { type: 'SUBMIT_PHONE_NUMBER'; }
        
    },
    context: {
      errorMessage: undefined as string | undefined,
      createUsernameFormInput: '',
      createEmailFormInput: '',
      createPhoneNumberFormInput: 0
    },
    // tsTypes: {} as import('./validationFormMachine.typegen').Typegen0,
    states: {
      // 'Loading form': {
      //   invoke: {
      //     src: 'loadForm',
      //     onDone: {
      //       target: 'Form loaded'
      //     },
      //     onError: {
      //       target: 'Form loading errored',
      //       actions: 'assignErrorToContext'
      //     }
      //   }
      // },
      'formLoaded': {
        on: {
          CREATE_NEW_USERNAME: {
            target: 'enteringUserName'
          }
        }
      },
      'enteringUserName': {
        // initial: 'Showing username form input',
        // states: {
        //   'Showing username form input': {
        on: {
          'ENTERING_USER_NAME': {
            actions: 'assignUserNameFormInputToContext'
          },
          'SUBMIT_USER_NAME': {
            target: 'enteringEmail'
          }
        }
        //   }
        // }
      },
      'enteringEmail': {
        on: {
          'ENTERING_EMAIL_ADDRESS': {
            actions: 'assignEmailFormInputToContext'
          },
          'SUBMIT_EMAIL_ADDRESS': {
            target: 'enteringPhoneNumber'
          }
        }
      },
      'enteringPhoneNumber': {
        on: {
          'ENTERING_PHONE_NUMBER': {
            actions: 'assignPhoneNumberFormInputToContext'
          },
          'SUBMIT_PHONE_NUMBER': {
            target: ''
          }
        }
      },
      'Form loading errored': {}
    }
  },
  {
    actions: {
      assignErrorToContext: assign((context, event) => {
        return {
          errorMessage: (event.data as Error).message
        };
      }),
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
      })
    }
  }
);

export default validationFormMachine;
