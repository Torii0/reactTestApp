import { FieldValues, useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(3, {message: "Imię musi się składać z minimum 3 liter!"}),
  age: z.number({invalid_type_error: "Wymagane pole"}).min(18)
});
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }
const FormUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const handleButton = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleButton)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {errors.name && (
        <p className="text-danger">{errors.name.message}</p>
      )}
      {/* { required: true, minLength: 3 }
      {errors.name?.type == "minLength" && (
        <p className="text-danger">Imię musi się składać z minimum 3 liter!</p>
      )} */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", {valueAsNumber: true})}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
        <p className="text-danger">{errors.age.message}</p>
      )}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Button
      </button>
    </form>
  );
};

export default FormUseForm;
