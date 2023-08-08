import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearValue = () => {
    setValue("");
  };

  return {
    value,
    handleChange,
    clearValue,
  };
}
