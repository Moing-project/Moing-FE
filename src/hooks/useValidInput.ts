import { useState } from "react";
import { UseInputProps } from "./types/useValidInputType";

export function useInput({ initialValue, validateFunc }: UseInputProps) {
  const [value, setValue] = useState<string>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(initialValue === "");
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validateFunc(newValue));
    setIsEmpty(newValue === "");
  };

  const handleBlur = () => {
    setIsBlurred(true);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsBlurred(false);
    setIsFocused(true);
  };

  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    setIsEmpty(true);
    e.preventDefault();
  };

  return {
    value,
    handleChange,
    clearValue,
    isValid,
    isEmpty,
    isBlurred,
    isFocused,
    handleBlur,
    handleFocus,
  };
}

export function usePasswordInput(
  initialValue: string,
  validateFunc: (value: string) => boolean
) {
  const [password, setPassword] = useState<string>(initialValue);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(
    initialValue === ""
  );

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setIsValidPassword(validateFunc(e.target.value));
    setIsPasswordEmpty(newValue === "");
  };

  const clearPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPassword("");
    setIsPasswordEmpty(true);
    e.preventDefault();
  };

  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  return {
    password,
    handlePasswordChange,
    clearPassword,
    isValidPassword,
    isPasswordEmpty,
    showPassword,
    toggleShowPassword,
  };
}

export function usePasswordMatchInput(
  initialValue: string,
  matchCheckFunc: (matchValue: string, value: string) => boolean,
  matchValue: string
) {
  const [passwordMatch, setPasswordMatch] = useState<string>(initialValue);
  const [showPasswordMatch, setShowPasswordMatch] = useState<boolean>(false);
  const [isMatchedPassword, setIsisMatchedPassword] = useState<boolean>(true);
  const [isPasswordMatchEmpty, setIsPasswordMatchEmpty] = useState<boolean>(
    initialValue === ""
  );

  const handlePasswordMatchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;
    setPasswordMatch(newValue);
    setIsisMatchedPassword(matchCheckFunc(e.target.value, matchValue));
    setIsPasswordMatchEmpty(newValue === "");
  };

  const clearPasswordMatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPasswordMatch("");
    setIsPasswordMatchEmpty(true);
    e.preventDefault();
  };

  const toggleShowPasswordMatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPasswordMatch(!showPasswordMatch);
    e.preventDefault();
  };

  return {
    passwordMatch,
    handlePasswordMatchChange,
    clearPasswordMatch,
    isMatchedPassword,
    isPasswordMatchEmpty,
    showPasswordMatch,
    toggleShowPasswordMatch,
  };
}
