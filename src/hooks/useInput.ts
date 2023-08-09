import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // 비밀번호 input에 사용
  const [showPassword, setShowPassword] = useState<boolean>(false);

>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
=======
  const handleBlur = () => {
    setIsFocused(false);
  };

=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
    e.preventDefault();
  };

<<<<<<< HEAD
  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
  };

=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  return {
    value,
    isFocused,
    handleChange,
    handleFocus,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    handleBlur,
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
    clearValue,
  };
}
