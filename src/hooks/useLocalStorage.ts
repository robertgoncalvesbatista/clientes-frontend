import { useEffect, useState } from "react";

type Props = {
  key: string;
  initialValue: any;
};

function useLocalStorage({ key, initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);

    console.log(value);
  }, []);

  return [value, setValue];
}

export default useLocalStorage;
