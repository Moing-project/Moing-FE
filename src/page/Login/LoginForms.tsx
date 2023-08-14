import React, { useState } from "react";
import * as S from "../../styledComponents/Auth";
import * as C from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useCheckBox } from "../../hooks/useCheckBox";

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

  const { checked: autoLogin, setChecked: setAutoLogin } = useCheckBox();

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
          email: email,
          password: password,
        });
        console.log(res);
      }
    }
  };

  // 엔터 키 핸들링 함수
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onLoginSubmit(event);
    }
  };

  // 버튼 상태 값
  let status = !isValidEmail(email) || !password ? "active" : "disable";

  return (
    <S.LoginBox $direction="column">
      <nav>
        도움이 필요하세요? <Link to="">고객센터</Link>
      </nav>
      <S.LoginFormBox onSubmit={onLoginSubmit}>
        <h1>로그인</h1>
        <S.LoginForm $direction="column" $gap="12px">
          <div>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={isValidEmail(email)}
              $isEmpty={email === ""}
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
                onKeyDown={handleKeyDown} // 엔터 키 핸들링
                tabIndex={1} // 탭 순서
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
          <div>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={false}
              $isEmpty={true}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onFocus={handlePasswordFocus}
                onKeyDown={handleKeyDown} // 엔터 키 핸들링
                tabIndex={2} // 탭 순서
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
            </C.InputBox>
            {/* <C.CautionText>로그인 정보가 틀립니다.</C.CautionText> */}
          </div>
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
          disabled={!isValidEmail(email) || !password}
          style={{ marginBottom: "48px" }}
          tabIndex={3} // 탭 순서
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
