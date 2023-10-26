import { createMachine, assign } from 'xstate';

const validationFormMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AMgahM1AAQAzCpQDEEYm2bICAazZosOfMTJVajZm07deg4QikE6eQkQDaABgC6lq4lAAHArEzKi9kAA9EAJgCMAGysAMw+AT4A7MEAHMER8dF+ADQgAJ6IwUE+Fn4ArNERYYkW0RbBAL7lKQrYJirC6kwsHFw8RPxCVCJg5OQUrA7oeJ2UrDVKpqo09E1arbojBkTSxm62th5OLm4e3ggAtLmsAJzBMbk+wRb5VxF+PinpCFGsl5kALO8RFz65MZXVDC1NxTRqaVhTPjoVqQEQAYXIYDwYD4LAA7nwAK6wHpEVCUMAbJAgLauUy7RDve6sCzXAJRY4WQp+ZJpRAsvw0+K5PzxCIWALHIUAkDjOqkBozcEIpH4dqosAY7G4-FsADKDAIaN0yvIeIJeiofGYDkxuBEAFUcXrVXwAJJEU24PiMVDtSBExzOMnECkIP4RVg3b7Helhd4BVlPD6scK5XJCiw+Y4J4KhypVEBEAgQOAeMUgyUaFibb07Yl7fbRY5c6vRAICnyfd4WY6PRD7e5BL5+Y4sxnxy65EUFyZF2YtHTykal7bkisd0InKlfALvaJ-esXdsHNM0-x9vzvU6BUIBEdAib1NRS5qQ6HcSCzn3uBcIT7RIMlbKN0oRALBO8O5UkGwR-O8kTHqGTL-heijiqCt5sDKJjyuiWLWvqYDPuWoB7FcNYWOuabxOEG5CjuvafgE9IRJ8vLHNE2QVJmo7XtMxbIYiqH8OhupYawGpajqmG2iMxqOmaOHznhGS5IGRGxMcpE+ORbZsggqlBCy-7Qacdx3O8cHAmON6cRCwhQvM8o9H0iIQNJvpvvsIFMnWDbhM2rY7tk7yvDydxpr2XylNEGblEAA */
    id: 'validationFormMachine',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'Loading form',
    schema: {
      // events: {} as
      //   | { type: 'Form loaded' }
      //   | { type: 'Form loading failed' }
      //   | { type: 'Create new username' }
      services: {} as {
        loadForm: {
          data: void;
        };
      },
      events: {} as
        | { type: 'Create new username' }
        | { type: 'Username Input changed'; value: string }
    },
    context: {
      errorMessage: undefined as string | undefined,
      createUsernameFormInput: '',
      createEmailFormInput: '',
      createPhoneNumberFormInput: 0
    },
    tsTypes: {} as import('./validationFormMachine.typegen').Typegen0,
    states: {
      'Loading form': {
        invoke: {
          src: 'loadForm',
          onDone: {
            target: 'Form loaded'
          },
          onError: {
            target: 'Form loading errored',
            actions: 'assignErrorToContext'
          }
        }
      },
      'Form loaded': {
        on: {
          'Create new username': {
            target: 'Creating new username'
          }
        }
      },
      'Creating new username': {
        initial: 'Showing username form input',
        states: {
          'Showing username form input': {
            on: {
              'Username Input changed': {
                actions: 'assignUserNameFormInputToContext'
              }
            }
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
          createUsernameFormInput: event.value
        };
      }),
      assignPhoneNumberFormInputToContext: assign((context, event) => {
        return {
          createUsernameFormInput: event.value
        };
      })
    }
  }
);

export default validationFormMachine;
