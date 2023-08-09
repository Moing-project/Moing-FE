import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 비밀번호 input에 사용
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
  };

  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  return {
    value,
    isFocused,
    handleChange,
    handleFocus,
    handleBlur,
    clearValue,
    showPassword,
    toggleShowPassword,
  };
}
