import React, { useState } from "react";
import { InputBox } from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";
import ValidatedInput from "../../components/ValidatedInput";

type Props = {
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isValidPassword: (password: string) => boolean;
  handleKeyDown: (e: any) => void;
};

export default function LoginPasswordInput({
  password,
  handlePasswordChange,
  clearPassword,
  isValidPassword,
  handleKeyDown,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  return (
    <div>
      <InputBox
        $justify="space-between"
        $align="center"
        $isValidValue={isValidPassword(password)}
      >
        <ValidatedInput
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
          isValid={isValidPassword(password)}
          placeholder="비밀번호 입력"
        />
        <div>
          {password && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
            <button onClick={clearPassword}>
              <I.Remove />
            </button>
          )}
          <button onClick={toggleShowPassword}>
            {showPassword ? <I.Hide /> : <I.Visible />}
          </button>
        </div>
      </InputBox>
    </div>
  );
}
