import { useState } from "react";

export function usePwInput() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearPassword = () => {
    setPassword("");
  };

  return {
    password,
    showPassword,
    handlePasswordChange,
    toggleShowPassword,
    clearPassword,
  };
}
