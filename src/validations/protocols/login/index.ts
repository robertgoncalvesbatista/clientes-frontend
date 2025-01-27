import * as yup from "yup";

import { loginValidation } from "../../validators";

export type LoginValidator = yup.InferType<typeof loginValidation>;
