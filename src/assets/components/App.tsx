import { useMachine } from '@xstate/react';
import EmailInput from './FormInput/EmailInput';
import validationFormMachine from '../machines/validationFormMachine';

import Svg from '../images/Svg';

function App() {
  const [currentState, send] = useMachine(validationFormMachine, {
    services: {
      loadForm: async () => {
        // throw new Error('heeey'),
        console.log('form is loaded');
      }
    },
    devTools: true
  });

  return (
    <div className="bg-gray-900 py-16 sm:py-24 h-screen">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
          {currentState.matches('Loading form') && (
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loading....
            </h2>
          )}

          {currentState.matches('Form loaded') && (
            <div className="grid grid-flow-row gap-10 justify-center">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Press "Start" button to begin registration
              </h2>
              <button
                type="button"
                className="place-self-center w-[150px] rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                onClick={() => {
                  send({
                    type: 'Create new username'
                  });
                }}>
                Start
              </button>
              <Svg />
            </div>
          )}

          {currentState.matches('Creating new username.Showing username form input') && (
            <div>
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Current step
              </h2>
              <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                {JSON.stringify(currentState.value)}
              </p>
              <EmailInput />
              <Svg />
              <div className="grid grid-cols-3 gap-10 w-[300px] m-auto mt-10">
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                  Back
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
