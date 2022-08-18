import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { messages } from "../../utils/messages";
import { useForm } from "react-hook-form";
import { Button, ButtonDelete, Error, FormComp, FormField } from "./form.style";
import { AplicationContext } from "../../context/FormContext";
import { getUser, putUser, deleteUser } from "../../services/formService";

const Edit = ({ changePage }) => {
  const { data: dataContext, setData: setDataContext } =
    useContext(AplicationContext);

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
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setDataContext(data);
    putUser(data)
      .then((res) => {
        console.log(res);
        setDataContext(res);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
    changePage();
  };

  const onDelete = (id) => {
    deleteUser(id);
    reset();
    changePage();
  };

  useEffect(() => {
    getUser(dataContext.id)
      .then((data) => {
        console.log(data);
        setDataContext(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataContext, setDataContext]);

  useEffect(() => {
    setValue("name", dataContext.name);
    setValue("address", dataContext.address);
    setValue("nit", dataContext.nit);
    setValue("phone", dataContext.phone);
  }, [dataContext, setValue]);

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
          <Button type="submit">Editar Usuario</Button>
          <ButtonDelete onClick={() => onDelete(dataContext.id)} type="button">
            Eliminar
          </ButtonDelete>
        </FormField>
      </form>
    </FormComp>
  );
};

export default Edit;
