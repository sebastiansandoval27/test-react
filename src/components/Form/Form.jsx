import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { messages } from "../../utils/messages";
import { useForm } from "react-hook-form";
import { Button, Error, FormComp, FormField } from "./form.style";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(messages.required),
    address: yup.string().required(messages.required),
    nit: yup.string().required(messages.required),
    phone: yup
      .number()
      .required(messages.required)
      .typeError(messages.numberInValid),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <FormComp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <input {...register("name")} placeholder="name" type="text" />
          {errors.name && <Error>{errors.name.message}</Error>}
        </FormField>
        <FormField>
          <input {...register("address")} placeholder="address" type="text" />
          {errors.address && <Error>{errors.address.message}</Error>}
        </FormField>
        <FormField>
          <input {...register("nit")} placeholder="nit" type="text" />
          {errors.nit?.message && <Error>{errors.nit?.message}</Error>}
        </FormField>
        <FormField>
          <input {...register("phone")} placeholder="phone" type="number" />
          {errors.phone?.message && <Error>{errors.phone?.message}</Error>}
        </FormField>
        <FormField>
          <Button type="submit">Submit</Button>
        </FormField>
      </form>
    </FormComp>
  );
};

export default Form;
