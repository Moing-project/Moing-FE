import React from "react";
import * as I from "../components/UsingIcons";
import { CautionText, InputBox } from "../styledComponents/commons/Inputs";

type InputProps = {
  value: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearValue: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isValidValue: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  validErrorMessage: string;

  // 비밀번호
  showPassword?: boolean;
  toggleShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  // 중복, 공백체크
  isDuplicated?: boolean;
  isEmpty?: boolean;
  duplicateErrorMessage?: string;
};

function Inputs({
  value,
  handleValueChange,
  clearValue,
  isValidValue,
  isDuplicated,
  isEmpty,
  onSubmit,
  placeholder,
  validErrorMessage,
  duplicateErrorMessage,
}: InputProps) {
  // 엔터 키 핸들링 함수
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(e);
    }
  };
  return (
    <div>
      <InputBox
        $justify="space-between"
        $align="center"
        $isValidValue={isValidValue}
        $isDuplicated={isDuplicated}
        $isEmpty={isEmpty}
      >
        <input
          type="text"
          value={value}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <div>
          {value && (
            <button onClick={clearValue}>
              <I.Remove />
            </button>
          )}
        </div>
      </InputBox>
      {value && !isValidValue && <CautionText>{validErrorMessage}</CautionText>}
      {isDuplicated && <CautionText>{duplicateErrorMessage}</CautionText>}
    </div>
  );
}

function PasswordInput({
  value,
  handleValueChange,
  clearValue,
  isValidValue,
  isDuplicated,
  isEmpty,
  onSubmit,
  placeholder,
  validErrorMessage,
  showPassword,
  toggleShowPassword,
}: InputProps) {
  // 엔터 키 핸들링 함수
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div>
      <InputBox
        $justify="space-between"
        $align="center"
        $isValidValue={isValidValue}
        $isDuplicated={isDuplicated}
        $isEmpty={isEmpty}
      >
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <div>
          {value && (
            <button onClick={clearValue}>
              <I.Remove />
            </button>
          )}
          <button onClick={toggleShowPassword}>
            {showPassword ? <I.Hide /> : <I.Visible />}
          </button>
        </div>
      </InputBox>
      {value && !isValidValue && <CautionText>{validErrorMessage}</CautionText>}
    </div>
  );
}

export { Inputs, PasswordInput };
