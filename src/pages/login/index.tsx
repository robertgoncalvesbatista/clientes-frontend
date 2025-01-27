import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  Card,
  Container,
  Grid2,
  Link,
  Typography,
} from "@mui/material";

import InputTextControlled from "../../components/InputText";
import { useAuth } from "../../contexts/AuthContext";

import { loginValidation } from "../../validations/validators";
import { LoginValidator } from "../../validations/protocols";

interface ILogin {
  email: string;
  password: string;
}

function Page() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginValidator>({
    resolver: yupResolver(loginValidation),
  });

  const handleOnSubmit = useCallback(async (data: ILogin) => {
    await login(data)
      .then(() => {
        navigate("/customers");
      })
      .catch(() => {
        console.log("Erro ao fazer login");
      });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card variant="outlined" sx={{ p: 4 }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputTextControlled
              name="email"
              label="Email"
              control={control}
              error={errors.email}
            />

            <InputTextControlled
              name="password"
              label="Senha"
              control={control}
              error={errors.password}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ mt: 3, mb: 2 }}
            >
              Acessar
            </Button>

            <Grid2 container>
              <Grid2>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid2>

              <Grid2>
                <Typography variant="body2">
                  Você não tem cadastro?{" "}
                  <Link href="/register" variant="body2">
                    Cadastre-se aqui!
                  </Link>
                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Page;
