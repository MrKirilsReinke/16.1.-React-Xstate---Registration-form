import { useMachine } from '@xstate/react';
import EmailInput from './EmailInput';
import validationFormMachine from '../machines/validationFormMachine';

import Svg from '../public/Svg';

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
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified when we’re launching.
          </h2>
          <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud
            nulla et culpa.
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
            {/* <button onClick={() => {
              send({
                type: 'Form loaded'
              });
            }}>Send 'Form loaded' event</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
