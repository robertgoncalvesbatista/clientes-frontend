import * as yup from "yup";

import { registerValidation } from "../../validators";

export type RegisterValidator = yup.InferType<typeof registerValidation>;
