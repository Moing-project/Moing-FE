import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
  };

  return {
    value,
    isFocused,
    handleChange,
    handleFocus,
    clearValue,
  };
}
