import { useCallback } from "react";

function useMaskHook() {
  const cpf = useCallback((value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }, []);

  const phone = useCallback((value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }, []);

  const cep = useCallback((value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  }, []);

  return { cpf, phone, cep };
}

export default useMaskHook;
