import React, { ChangeEvent, KeyboardEvent } from "react";

type ValidatedInputProps = {
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  placeholder: string;
};

function ValidatedInput({
  type,
  value,
  onChange,
  onKeyDown,
  isValid,
  placeholder,
}: ValidatedInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={isValid ? "valid" : "invalid"}
    />
  );
}

export default ValidatedInput;
