import React from "react";
import * as C from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";
import ValidatedInput from "../../components/ValidatedInput";

type Props = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearEmail: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isValidEmail: (email: string) => boolean;
  handleKeyDown: (e: any) => void;
};

export default function LoginEmailInput({
  email,
  handleEmailChange,
  clearEmail,
  isValidEmail,
  handleKeyDown,
}: Props) {
  return (
    <div>
      <C.InputBox
        $justify="space-between"
        $align="center"
        $isValidValue={isValidEmail(email)}
      >
        <ValidatedInput
          value={email}
          onChange={handleEmailChange}
          onKeyDown={handleKeyDown}
          isValid={isValidEmail(email)}
          placeholder="이메일"
        />
        {email && (
          <button onClick={clearEmail}>
            <I.Remove />
          </button>
        )}
      </C.InputBox>
      {email && !isValidEmail(email) && (
        <C.CautionText>이메일 주소 형식으로 입력해주세요.</C.CautionText>
      )}
    </div>
  );
}
