import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false);

<<<<<<< HEAD
=======
  // 비밀번호 input에 사용
  const [showPassword, setShowPassword] = useState<boolean>(false);

>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

<<<<<<< HEAD
  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
=======
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
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
  };

  return {
    value,
    isFocused,
    handleChange,
    handleFocus,
<<<<<<< HEAD
=======
    handleBlur,
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
    clearValue,
    showPassword,
    toggleShowPassword,
  };
}
