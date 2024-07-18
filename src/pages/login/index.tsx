import { useCallback, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import InputText from "../../components/InputText";

// import { useAuth } from "../../contexts/AuthContext";

interface ILogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .nullable()
    .email("O campo 'e-mail' deve receber um e-mail válido")
    .required("O campo 'e-mail' é obrigatório"),
  password: yup.string().nullable().required("O campo 'senha' é obrigatório"),
});

function Login() {
  // const auth = useContext(AuthContext);
  // const navigate = useNavigate();

  const {
    control,
    formState: { errors, isSubmitting, isDirty },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = useCallback(async (data: ILogin) => {
    try {
      const response = await axios.post(
        "http://localhost:80/api/authenticate",
        {
          email: data.email,
          password: data.password,
        }
      );

      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      } else {
        console.log(error);
      }
    }
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleOnSubmit)}
              noValidate
            >
              <InputText
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                control={control}
                error={errors.email}
              />

              <InputText
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                control={control}
                error={errors.password}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
