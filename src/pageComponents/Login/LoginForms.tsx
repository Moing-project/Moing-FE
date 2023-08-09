import React, { useState } from "react";
import * as S from "../../styledComponents/Auth";
import * as I from "./LoginIcons";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

import { usePostLoginMutation } from "../../redux/modules/LoginAPI";

export default function LoginForms() {
  const {
    value: email,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    clearValue: clearEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handlePasswordChange,
    handleFocus: handlePasswordFocus,
    clearValue: clearPassword,
  } = useInput("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const [login, { isLoading }] = usePostLoginMutation();

  const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLoading) {
      if (isValidEmail(email) && password) {
        // 이메일 형식과 비밀번호 모두 유효할 때
        console.log(email, password);
        const res = await login({
          username: email,
          password: password,
        });
        console.log(res);
      }
    }
  };

  return (
    <S.LoginBox direction="column">
      <nav>
        도움이 필요하세요? <Link to="">고객센터</Link>
      </nav>
      <S.LoginFormBox onSubmit={onLoginSubmit}>
        <h1>로그인</h1>
        <S.LoginForm direction="column" gap="12px">
          <div>
            <S.InputBox
              justify="space-between"
              align="center"
              $isValidEmail={isValidEmail(email)}
              $isEmail={email === ""}
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
                placeholder="이메일"
              />
              {email && (
                <button onClick={clearEmail}>
                  <I.Remove />
                </button>
              )}
            </S.InputBox>
            {email && !isValidEmail(email) && (
              <S.CautionText>이메일 주소 형식으로 입력해주세요.</S.CautionText>
            )}
          </div>
          <div>
            <S.InputBox
              justify="space-between"
              align="center"
              $isValidEmail={false}
              $isEmail={true}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onFocus={handlePasswordFocus}
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
            </S.InputBox>
            {/* <S.CautionText>로그인 정보가 틀립니다.</S.CautionText> */}
          </div>
        </S.LoginForm>
        <S.LoginFormNav justify="space-between" align="center">
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
            <Link to="">회원가입</Link>
          </div>
        </S.LoginFormNav>
        <S.SubmitButton
          type="submit"
          disabled={!isValidEmail(email) || !password}
          $isEmail={email === ""}
        >
          로그인
        </S.SubmitButton>
      </S.LoginFormBox>
      <S.Devider />
      <S.LoginSNSBox direction="column" align="center" gap="12px">
        <p>간편하게 회원가입 및 로그인하기</p>
        <S.LoginSNSNav gap="18px">
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
