import React, { useState } from "react";
import * as S from "../styledComponents/Auth";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";

import { ReactComponent as Remove } from "../assets/icons/remove.svg";
import { ReactComponent as Hide } from "../assets/icons/hide.svg";
import { ReactComponent as Visible } from "../assets/icons/visible.svg";

import { ReactComponent as Unchecked } from "../assets/elements/unchecked.svg";
import { ReactComponent as Checked } from "../assets/elements/checked.svg";

import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Kakao } from "../assets/icons/kakaotalk.svg";
import { ReactComponent as Naver } from "../assets/icons/naver.svg";

import { usePostLoginMutation } from "../redux/modules/LoginAPI";

const SignIn: React.FC = () => {
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
            <div>
              <S.InputBox
                justify="space-between"
                align="center"
                $isValidEmail={isValidEmail(email)}
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
                    <Remove />
                  </button>
                )}
              </S.InputBox>
              {email && !isValidEmail(email) && (
                <S.CautionText>
                  이메일 주소 형식으로 입력해주세요.
                </S.CautionText>
              )}
            </div>
            <div>
              <S.InputBox
                justify="space-between"
                align="center"
                $isValidEmail={true}
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
                      <Remove />
                    </button>
                  )}
                  <button onClick={toggleShowPassword}>
                    {showPassword ? <Hide /> : <Visible />}
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
              {autoLogin ? <Checked /> : <Unchecked />}
              <label htmlFor="autoLogin">자동 로그인</label>
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
          >
            로그인
          </S.SubmitButton>
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
