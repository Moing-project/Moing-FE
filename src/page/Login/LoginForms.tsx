import React from "react";
import * as S from "../../styledComponents/Auth";
import * as C from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useCheckBox } from "../../hooks/useCheckBox";
import { usePostLoginMutation } from "../../redux/modules/LoginAPI";
import LoginEmailInput from "./LoginEmailInput";
import { isValidEmail, isValidLoginPassword } from "../../utils/validators";
import LoginPasswordInput from "./LoginPasswordInput";

export default function LoginForms() {
  const {
    value: email,
    handleChange: handleEmailChange,
    clearValue: clearEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handlePasswordChange,
    clearValue: clearPassword,
  } = useInput("");

  const { checked: autoLogin, setChecked: setAutoLogin } = useCheckBox();

  const [login, { isLoading }] = usePostLoginMutation();

  const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLoading) {
      if (isValidEmail(email) && password) {
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

  // 엔터 키 핸들링 함수
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onLoginSubmit(e);
    }
  };

  // 버튼 상태 값
  const isSubmitButtonEnabled = () => {
    return (
      isValidEmail(email) && isValidLoginPassword(password) && email && password
    );
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
          <LoginEmailInput
            email={email}
            handleEmailChange={handleEmailChange}
            clearEmail={clearEmail}
            isValidEmail={isValidEmail}
            handleKeyDown={handleKeyDown}
          />
          <LoginPasswordInput
            password={password}
            handlePasswordChange={handlePasswordChange}
            clearPassword={clearPassword}
            isValidPassword={isValidLoginPassword}
            handleKeyDown={handleKeyDown}
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
        <C.SubmitButton
          type="submit"
          $shape="filled"
          $status={status}
          $width="long"
          $height="medium"
          disabled={!isSubmitButtonEnabled()}
          style={{ marginBottom: "48px" }}
        >
          로그인
        </C.SubmitButton>
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
