const useMaskHook = () => {
  const cpf = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const phone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const cep = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };

  return { cpf, phone, cep };
};

export { useMaskHook };
