import FormikProps from '../../types/FormikProps';
import FormikButton from '../Button/FormikButton';

function FormCompletionFormPart({ send, currentState }: FormikProps) {
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Your're almost done!
        </h2>
        <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
        Please, check your completed form one more time and press "Confirm" button
        to complete your registration.
        </p>
      </div>
      <div className="mt-5 space-y-10 divide-y divide-gray-900/10 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 mt-10">
          <div className="px-4 sm:px-0">
            <h2 className="text-start text-lg font-semibold leading-7 text-black">
            Personal Inforamtion
            </h2>
            <p className="text-start mt-1 text-sm leading-6 text-black">
            Please, check your personal information to ensure everything is
            correct.
            </p>
          </div>
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  First name:
                  </p>
                  <p className="mt-1 text-black">
                    {currentState.context.firstName}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Last name:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.lastName}</p>
                </div>
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Date of birth:
                  </p>
                  <p className="mt-1 text-black">
                    {currentState.context.dateOfBirth}
                  </p>
                </div>
                <div className="sm:col-span-3 sm:col-start-1">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Username:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.userName}</p>
                </div>
                <div className="sm:col-span-3 sm:col-start-1">
                  <p className="block text-sm font-medium leading-6 text-black">
                  E-mail:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.eMail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 py-10">
          <div className="px-4 sm:px-0">
            <h2 className="text-start text-lg font-semibold leading-7 text-black">
            Contact Inforamtion
            </h2>
            <p className="text-start mt-1 text-sm leading-6 text-black">
            Please, check your contact information to ensure everything is
            correct.
            </p>
          </div>
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Phone number:
                  </p>
                  <p className="mt-1 text-black">
                    {currentState.context.phoneNumber}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Street address:
                  </p>
                  <p className="mt-1 text-black">
                    {currentState.context.streetAddress}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  City:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.city}</p>
                </div>
                <div className="sm:col-span-3">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Postal code:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.zip}</p>
                </div>
                <div className="sm:col-span-3 sm:col-start-1">
                  <p className="block text-sm font-medium leading-6 text-black">
                  Country:
                  </p>
                  <p className="mt-1 text-black">{currentState.context.userName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
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
  );
}

export default FormCompletionFormPart;