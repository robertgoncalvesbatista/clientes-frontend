import * as yup from "yup";

export const registerValidation = yup.object({
  name: yup.string().nullable().required("O campo 'nome' é obrigatório"),
  email: yup
    .string()
    .nullable()
    .email("O campo 'e-mail' deve receber um e-mail válido")
    .required("O campo 'e-mail' é obrigatório"),
  password: yup.string().nullable().required("O campo 'senha' é obrigatório"),
  password_confirmation: yup
    .string()
    .nullable()
    .required("O campo 'confirmar senha' é obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
