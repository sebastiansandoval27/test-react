import { toast } from "react-toastify";

export const messages = {
  required: "Este campo es obligatorio",
  numberInValid: "Este campo debe ser un número",
};

export const notify = (type, text) =>
  toast(text, {
    type,
    position: "top-center",
    autoClose: 2500,
  });
