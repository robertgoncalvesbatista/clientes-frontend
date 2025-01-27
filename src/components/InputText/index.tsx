import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";

interface InputTextProps<T extends FieldValues = any> {
  name: string;
  label: string;
  control: Control<T>;
  error?: FieldError;
}

function InputText(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      fullWidth
      size={props.size ?? "small"}
      margin={props.margin ?? "normal"}
      variant={props.variant ?? "outlined"}
    />
  );
}

function InputTextControlled({ name, label, control, error }: InputTextProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControl fullWidth variant="standard" error={!!error?.message}>
            <InputText {...field} label={label} />

            <FormHelperText id="component-error-text">
              {error?.message}
            </FormHelperText>
          </FormControl>
        );
      }}
    />
  );
}

// Exportações nomeadas
export { InputText };

// Exportação padrão
export default InputTextControlled;
