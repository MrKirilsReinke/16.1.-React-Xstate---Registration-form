import { Typegen0 } from '../../machines/validationFormMachine.typegen';
import FormProps from '../../types/FormProps';
import Button from '../Button/Button';

function FormSubmittedFormPart({ send }: FormProps<Typegen0>) {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Yoooooo!
      </h2>
      <p className="mx-auto max-w-xl text-center text-lg leading-8 text-gray-300">
      Congratulations! You've successfully finished your registartion.
      </p>
      <div className="grid gap-10 w-[300px] m-auto mt-10">
        <Button
          type="reset"
          onClick={() => {
            send({
              type: 'RETURN_TO_BEGINNING'
            });
          }}>
        Return to the beginning
        </Button>
      </div>
    </div>
  );
}

export default FormSubmittedFormPart;