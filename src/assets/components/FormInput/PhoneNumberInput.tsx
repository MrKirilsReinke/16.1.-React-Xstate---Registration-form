function PhoneNumberInput() {
  return (
    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <label htmlFor="email-address" className="sr-only">
      Enter phone number
      </label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="number"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
      Confirm number
      </button>
    </form>
  );
}

export default PhoneNumberInput;