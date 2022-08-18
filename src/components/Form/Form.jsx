import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { messages, notify } from "../../utils/messages";
import { useForm } from "react-hook-form";
import { Button, Error, FormComp, FormField } from "./form.style";
import { AplicationContext } from "../../context/FormContext";
import { postUser } from "../../services/formService";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ changePage }) => {
  const { setData: setDataContext } = useContext(AplicationContext);

  const schema = yup.object().shape({
    name: yup.string().required(messages.required),
    address: yup.string().required(messages.required),
    nit: yup.string().required(messages.required),
    phone: yup
      .number()
      .required(messages.required)
      .positive(messages.numberInValid)
      .min(10000, messages.numberInValid)
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
    setDataContext(data);
    reset();
    postUser(data)
      .then((data) => {
        notify("success", "Usuario creado");
        setTimeout(() => {
          changePage();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        notify("error", "Error al crear usuario");
      });
  };

  return (
    <FormComp>
      <ToastContainer />
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
          <Button type="submit">Agregar Usuario</Button>
        </FormField>
      </form>
    </FormComp>
  );
};

export default Form;
