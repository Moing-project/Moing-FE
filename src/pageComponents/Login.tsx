import React from "react";
import * as S from "../styledComponents/Auth";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";

import { ReactComponent as Remove } from "../assets/icons/remove.svg";
import { ReactComponent as Hide } from "../assets/icons/hide.svg";
import { ReactComponent as Visible } from "../assets/icons/visible.svg";

import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Kakao } from "../assets/icons/kakaotalk.svg";
import { ReactComponent as Naver } from "../assets/icons/naver.svg";

import { usePostLoginMutation } from "../redux/modules/LoginAPI";

const SignIn: React.FC = () => {
  const {
    value: email,
    handleChange: handleEmailChange,
    isFocused: isEmailFocused,
    handleFocus: handleEmailFocus,
    handleBlur: handleEmailBlur,
    clearValue: clearEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handlePasswordChange,
    isFocused: isPassowordFocused,
    handleFocus: handlePasswordFocus,
    handleBlur: handlePasswordBlur,
    clearValue: clearPassword,
    showPassword,
    toggleShowPassword,
  } = useInput("");

  const [login, { isLoading }] = usePostLoginMutation();

  const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLoading) {
      console.log(email, password);
      const res = await login({
        username: email,
        password: password,
      });
      console.log(res);
    }
  };

  return (
    <S.LoginLayout justify="center" gap="144px">
      <S.LoginIntroBox direction="column" gap="48px">
        <S.LoginIntroText direction="column" gap="12px">
          <h1>
            모집과 협업을 한번에! <br />
            모두 있는 모임 공간
            <span> 모잉</span>
          </h1>
          <p>
            내가 원하는 프로젝트를 바로 찾아
            <br />
            바로 협업을 펼쳐보아요!
          </p>
        </S.LoginIntroText>
        <figure>
          <img src="imgs/example.png" alt="메인 사진" />
        </figure>
      </S.LoginIntroBox>
      <S.LoginBox direction="column">
        <nav>
          도움이 필요하세요? <Link to="">고객센터</Link>
        </nav>
        <S.LoginFormBox onSubmit={onLoginSubmit}>
          <h1>로그인</h1>
          <S.LoginForm direction="column" gap="12px">
            <S.InputBox justify="space-between" align="center">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                placeholder="이메일"
              />
              {email && isEmailFocused && (
                <button onClick={clearEmail}>
                  <Remove />
                </button>
              )}
            </S.InputBox>
            <S.InputBox justify="space-between" align="center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                placeholder="비밀번호 입력"
              />
              <div>
                {password &&
                  isPassowordFocused && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                    <button onClick={clearPassword}>
                      <Remove />
                    </button>
                  )}
                <button onClick={toggleShowPassword}>
                  {showPassword ? <Hide /> : <Visible />}
                </button>
              </div>
            </S.InputBox>
          </S.LoginForm>
          <S.LoginFormNav justify="space-between" align="center">
            <p>
              <input type="checkbox" /> 자동 로그인
            </p>
            <div>
              <Link to="">비밀번호 찾기</Link>
              <span>|</span>
              <Link to="">회원가입</Link>
            </div>
          </S.LoginFormNav>
          <S.SubmitButton type="submit">로그인</S.SubmitButton>
        </S.LoginFormBox>
        <S.Devider />
        <S.LoginSNSBox direction="column" align="center" gap="12px">
          <p>간편하게 회원가입 및 로그인하기</p>
          <S.LoginSNSNav gap="18px">
            <Link to="">
              <Google />
            </Link>
            <Link to="">
              <Kakao />
            </Link>
            <Link to="">
              <Naver />
            </Link>
          </S.LoginSNSNav>
        </S.LoginSNSBox>
      </S.LoginBox>
    </S.LoginLayout>
  );
};

export default SignIn;

// import React, { useState } from "react";
// import { usePostLoginMutation } from "../redux/modules/LoginAPI";
// import { useNavigate } from "react-router-dom";
// import { type } from "./../config/BaseRequestType";

// export default function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [login, { isLoading }] = usePostLoginMutation();

//   const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };

//   const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!isLoading) {
//       console.log(username, password);
//       const res = await login({
//         username: username,
//         password: password,
//       });
//       console.log(res);
//     }
//   };

//   return (
//     <form onSubmit={onLoginSubmit}>
//       Username <input onChange={changeUsername} value={username} />
//       <br />
//       Password <input onChange={changePassword} value={password} />
//       <br />
//       <button>버튼</button>
//       <br />
//       <button onClick={() => navigate("/")}>Home</button>
//     </form>
//   );
// }
