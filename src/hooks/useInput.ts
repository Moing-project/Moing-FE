import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
  };

  return {
    value,
    handleChange,
    clearValue,
  };
}
