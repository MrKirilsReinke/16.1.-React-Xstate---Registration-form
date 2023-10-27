import { useEffect, useState } from 'react';
import { useMachine } from '@xstate/react';
// import UsernameInput from './FormInput/UsernameInput';
// import EmailInput from './FormInput/EmailInput';
// import PhoneNumberInput from './FormInput/PhoneNumberInput';
import validationFormMachine from '../machines/validationFormMachine';
import Input from './Input/Input';
import Button from './Button/Button';

import Svg from '../images/Svg';

function App() {
  const [currentState, send] = useMachine(validationFormMachine, {
    services: {},
    devTools: true
  });


  const [userNameInput, setUserNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  // const [phoneNumberInput, setPhoneNumberInput] = useState('');

  useEffect(() => {
    if (currentState.matches('enteringUserName')) {
      setUserNameInput(currentState.context.createUsernameFormInput);
    }
    if (currentState.matches('enteringEmail')) {
      setEmailInput(currentState.context.createEmailFormInput);
    }
    // if (currentState.matches('enteringPhoneNumber')) {
    //   setPhoneNumberInput(currentState.context.createPhoneNumberFormInput);
    // }
  }, [currentState, currentState.matches('enteringUserName'), currentState.matches('enteringEmail')]);


  return (
    <div className="bg-gray-900 py-16 sm:py-24 h-screen">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
              <Svg />
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Current step:
              </h2>
              <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
                {JSON.stringify(currentState.value)}
              </p>
              <pre>{JSON.stringify(currentState.context)}</pre>

              {currentState.matches('enteringUserName') && (
                <div className='grid grid-flow-row gap-5 justify-center'>
                  <Input
                    placeholder="My username"
                    value={userNameInput}
                    onChange={(type, e) => {
                      setUserNameInput(e.target.value);
                      send({
                        type: 'ENTERING_USER_NAME',
                        value: e.target.value
                      });
                    }}
                  />
                  <Svg />
                  <div className="m-auto mt-2 w-[130px]">
                    <Button
                      onClick={() => {
                        send({
                          type: 'SUBMIT_USER_NAME'
                        });
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {currentState.matches('enteringEmail') && (
                <div className='grid grid-flow-row gap-5 justify-center'>
                  <Input
                    placeholder="My Email"
                    value={emailInput}
                    onChange={(type, e) => {
                      setEmailInput(e.target.value);
                      send({
                        type: 'ENTERING_EMAIL_ADDRESS',
                        value: e.target.value
                      });
                    }}
                  />
                  <Svg />
                  <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
                    <Button
                      onClick={() => {
                        send({
                          type: 'GO_BACK'
                        });
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        send({
                          type: 'SUBMIT_EMAIL_ADDRESS'
                        });
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {currentState.matches('enteringPhoneNumber') && (
                <div className='grid grid-flow-row gap-5 justify-center'>
                  <Input
                    placeholder="My phone number"
                    value=''
                    onChange={(type, e) => {
                      send({
                        type: 'ENTERING_PHONE_NUMBER',
                        value: e.target.value
                      });
                    }}
                  />
                  <Svg />
                  <div className="grid grid-cols-2 gap-10 w-[300px] m-auto mt-2">
                    <Button
                      onClick={() => {
                        send({
                          type: 'GO_BACK'
                        });
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        send({
                          type: 'SUBMIT_PHONE_NUMBER'
                        });
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


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
