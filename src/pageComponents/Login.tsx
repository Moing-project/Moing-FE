import React from "react";
import * as S from "../styledComponents/Login";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { usePwInput } from "../hooks/usePwInput";

import { ReactComponent as Remove } from "../assets/icons/remove.svg";
import { ReactComponent as Hide } from "../assets/icons/hide.svg";
import { ReactComponent as Visible } from "../assets/icons/visible.svg";

import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Kakao } from "../assets/icons/kakaotalk.svg";
import { ReactComponent as Naver } from "../assets/icons/naver.svg";

const SignIn: React.FC = () => {
  const { value, handleChange, clearValue } = useInput("");
  const {
    password,
    showPassword,
    handlePasswordChange,
    toggleShowPassword,
    clearPassword,
  } = usePwInput();

  return (
    <S.LoginLayout justify="center" gap="144px">
      <S.LoginIntroBox direction="column" gap="48px">
        <S.LoginIntroText direction="column" gap="12px">
          <h1>
            모집과 협업을 한번에! <br />
            모두 있는 모임 공간
            <span style={{ color: "var(--keyColor-main)" }}> 모잉</span>
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
        <S.LoginFormBox direction="column">
          <h1>로그인</h1>
          <S.LoginForm direction="column" gap="12px">
            <div>
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="이메일"
              />
              {value && (
                <button onClick={clearValue}>
                  <Remove />
                </button>
              )}
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호 입력"
              />
              {password && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                <button onClick={clearPassword}>
                  <Remove />
                </button>
              )}
              <button onClick={toggleShowPassword}>
                {showPassword ? <Hide /> : <Visible />}
              </button>
            </div>
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
          <button>로그인</button>
        </S.LoginFormBox>
        <S.Devider></S.Devider>
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
