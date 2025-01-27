import { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, Card, Container, Link, Typography } from "@mui/material";

import InputTextControlled from "../../components/InputText";
import { useAuth } from "../../contexts/AuthContext";

import { registerValidation } from "../../validations/validators";
import { RegisterValidator } from "../../validations/protocols";

interface IRegister {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

function Page() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<RegisterValidator>({
    resolver: yupResolver(registerValidation),
  });

  const handleRegister = useCallback(async (data: IRegister) => {
    await register(data)
      .then(() => {
        navigate("/customers");
      })
      .catch(() => {
        console.log("Erro ao fazer cadastro");
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
            onSubmit={handleSubmit(handleRegister)}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputTextControlled
              name="name"
              label="Nome"
              control={control}
              error={errors.name}
            />

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

            <InputTextControlled
              name="password_confirmation"
              label="Confirmar senha"
              control={control}
              error={errors.password_confirmation}
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

            <Typography variant="body2">
              Você já possui cadastro?{" "}
              <Link href="/login" variant="body2">
                Acesse aqui!
              </Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Page;
