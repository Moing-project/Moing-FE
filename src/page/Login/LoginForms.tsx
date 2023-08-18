import React from "react";
import * as S from "../../styledComponents/commons/Auth";
import * as C from "../../styledComponents/commons/commonStyle";
import * as I from "../../components/UsingIcons";
import { Link } from "react-router-dom";
import { useInput, usePasswordInput } from "../../hooks/useValidInput";
import { useCheckBox } from "../../hooks/useCheckBox";
import { usePostLoginMutation } from "../../redux/modules/LoginAPI";
import { Inputs, PasswordInput } from "../../components/Inputs";
import { SubmitButton } from "../../styledComponents/commons/Buttons";
import {
  emailValidCheck,
  loginPasswordValidCheck,
} from "../../utils/validators";

export default function LoginForms() {
  const {
    value: email,
    handleChange: handleEmailChange,
    clearValue: clearEmail,
    isValid: isValidEmail,
    isEmpty: isEmailEmpty,
  } = useInput({ initialValue: "", validateFunc: emailValidCheck });

  const {
    password,
    handlePasswordChange,
    clearPassword,
    isValidPassword,
    showPassword,
    toggleShowPassword,
  } = usePasswordInput("", loginPasswordValidCheck);

  const { checked: autoLogin, setChecked: setAutoLogin } = useCheckBox();

  const [login, { isLoading }] = usePostLoginMutation();

  const onLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading) {
      if (isValidEmail && isValidPassword) {
        // 이메일 형식과 비밀번호 모두 유효할 때
        console.log(email, password);
        const res = await login({
          email: email,
          password: password,
        });
        console.log(res);
      }
    }
  };

  // 버튼 상태 값
  const isSubmitButtonEnabled = () => {
    return isValidEmail && isValidPassword && email && password;
  };

  let status = !isSubmitButtonEnabled() ? "active" : "disable";

  return (
    <S.LoginBox $direction="column">
      <nav>
        도움이 필요하세요? <Link to="">고객센터</Link>
      </nav>
      <S.LoginFormBox onSubmit={onLoginSubmit}>
        <h1>로그인</h1>
        <S.LoginForm $direction="column" $gap="12px">
          <Inputs
            value={email}
            handleValueChange={handleEmailChange}
            clearValue={clearEmail}
            isValidValue={isValidEmail}
            isEmpty={isEmailEmpty}
            onSubmit={onLoginSubmit}
            placeholder="이메일을 입력하세요"
            validErrorMessage="이메일 주소 형식으로 입력해주세요."
          />
          <PasswordInput
            value={password}
            handleValueChange={handlePasswordChange}
            clearValue={clearPassword}
            isValidValue={isValidPassword}
            onSubmit={onLoginSubmit}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            placeholder="비밀번호를 입력하세요"
            validErrorMessage=""
          />
        </S.LoginForm>
        <S.LoginFormNav $justify="space-between" $align="center">
          <p>
            <input
              type="checkbox"
              id="autoLogin"
              checked={autoLogin} // 체크 여부에 따라 상태 반영
              onChange={() => setAutoLogin(!autoLogin)} // 체크 상태 변경
            />
            <label htmlFor="autoLogin">
              {autoLogin ? <I.Checked /> : <I.Unchecked />}
              자동 로그인
            </label>
          </p>
          <div>
            <Link to="">비밀번호 찾기</Link>
            <span>|</span>
            <Link to="/signin">회원가입</Link>
          </div>
        </S.LoginFormNav>
        <SubmitButton
          type="submit"
          $shape="filled"
          $status={status}
          $width="long"
          $height="medium"
          disabled={!isSubmitButtonEnabled()}
          style={{ marginBottom: "48px" }}
        >
          로그인
        </SubmitButton>
      </S.LoginFormBox>
      <C.Devider />
      <S.LoginSNSBox $direction="column" $align="center" $gap="12px">
        <p>간편하게 회원가입 및 로그인하기</p>
        <S.LoginSNSNav $gap="18px">
          <Link to="">
            <I.Google />
          </Link>
          <Link to="">
            <I.Kakao />
          </Link>
          <Link to="">
            <I.Naver />
          </Link>
        </S.LoginSNSNav>
      </S.LoginSNSBox>
    </S.LoginBox>
  );
}
