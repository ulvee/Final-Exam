import * as yup from "yup";

export const cardSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});
