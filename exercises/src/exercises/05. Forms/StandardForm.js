import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const StandardForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    age: yup.number().positive().integer().required("This field is required"),
    password: yup.string().min(4).max(20).required("This field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter name here..."
        {...register("fullName")}
      />
      <p>{errors.fullName?.message}</p>
      <input
        type="email"
        placeholder="Enter email here..."
        {...register("email")}
      />
      <p>{errors.email?.message}</p>

      <input
        type="number"
        placeholder="Enter age here..."
        {...register("age")}
      />
      <p>{errors.age?.message}</p>

      <input
        type="password"
        placeholder="Enter password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>

      <input type="submit" />
    </form>
  );
};
