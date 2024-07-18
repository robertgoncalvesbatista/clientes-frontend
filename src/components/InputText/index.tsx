import { Control, Controller, FieldError } from "react-hook-form";

interface InputTextProps {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  error?: FieldError;
}

function InputText({
  name,
  label,
  placeholder,
  control,
  error,
}: InputTextProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <div>
            <label
              htmlFor={name}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>

            <input
              {...field}
              id={name}
              type="text"
              name={name}
              placeholder={placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {error?.message && (
              <p className="text-red-400 text-sm">{error?.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}

export default InputText;
