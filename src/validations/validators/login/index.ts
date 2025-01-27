import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup
    .string()
    .nullable()
    .email("O campo 'e-mail' deve receber um e-mail válido")
    .required("O campo 'e-mail' é obrigatório"),
  password: yup.string().nullable().required("O campo 'senha' é obrigatório"),
});
