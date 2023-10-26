import { useMachine } from '@xstate/react';
import validationFormMachine from '../../machines/validationFormMachine';
import Svg from '../../images/Svg';

function UsernameInput() {
  const [currentState, send] = useMachine(validationFormMachine, {
    services: {
      loadForm: async () => {
        // throw new Error('heeey'),
        console.log('form is loaded');
      }
    }
  });

  return (
    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <div>
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Current step:
        </h2>
        <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
          {JSON.stringify(currentState.value)}
        </p>
        <pre>{JSON.stringify(currentState.context)}</pre>
        <input
          id="username"
          name="username"
          type="text"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="My Username"
          onChange={(e) => {
            send({
              type: 'Username Input changed',
              value: e.target.value
            });
          }}
        />
        <Svg />
        <div className="grid gap-10 w-[300px] m-auto mt-10">
          <button
            type="button"
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 right-0">
                  Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default UsernameInput;