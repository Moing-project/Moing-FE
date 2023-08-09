import { styled } from "styled-components";
import FlexContainer, { FlexContainerProps } from "./Flexbox";

export interface AuthProps {
  $isValidEmail?: boolean;
}

// 로그인 페이지
export const LoginLayout = styled(FlexContainer)<FlexContainerProps>`
  box-sizing: border-box;
  height: 740px;
  padding: 100px 128px 148px 128px;
`;

export const LoginIntroBox = styled(FlexContainer)<FlexContainerProps>``;

export const LoginIntroText = styled(FlexContainer)<FlexContainerProps>`
  h1 {
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: var(--gray-06);
  }
`;

export const LoginBox = styled(FlexContainer)<FlexContainerProps>`
  & > nav {
    text-align: right;
    margin-bottom: 48px;

    color: var(--gray-06);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; /* 166.667% */

    a {
      color: var(--main-font);
      font-weight: 600;
      text-decoration: none; // 밑줄 제거
    }

    a:visited {
      color: var(--main-font);
    }
  }
`;

export const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 24px;
    color: var(--main-font);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const LoginForm = styled(FlexContainer)<FlexContainerProps>`
  margin-bottom: 16px;
`;

export const LoginFormNav = styled(FlexContainer)<FlexContainerProps>`
  margin-bottom: 40px;

  color: var(--gray-06);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px; /* 166.667% */

  p {
    display: flex;
    align-items: center;

    input[id="autoLogin"] {
      display: none;
    }

    label {
      margin-left: 6px;
      cursor: pointer;
    }
  }

  a {
    color: var(--gray-06);
    text-decoration: none; // 밑줄 제거
  }

  a:visited {
    color: var(--gray-06);
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

export const Devider = styled.div`
  width: 368px;
  height: 0.5px;
  background: var(--gray-05);
`;

export const LoginSNSBox = styled(FlexContainer)<FlexContainerProps>`
  p {
    padding-top: 24px;
    color: var(--gray-05);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const LoginSNSNav = styled(FlexContainer)<FlexContainerProps>``;

// 회원가입 페이지
export const SignInLayout = styled(FlexContainer)<FlexContainerProps>`
  margin: 72px auto;
  text-align: center;

  & > div:first-child {
    h1 {
      margin-bottom: 12px;
      color: var(--main-font);
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 38px;

      span {
        color: var(--keyColor-main);
      }
    }

    & > p {
      color: var(--gray-06);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 130% */
    }
  }

  nav {
    color: var(--gray-06);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */

    a {
      color: var(--main-font);
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const SignInFormBox = styled(FlexContainer)<FlexContainerProps>`
  margin: 60px 0 48px 0;

  & > div {
    p:first-child {
      color: var(--main-font);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: left;
      margin-bottom: 8px;
    }
  }
`;

export const SignInTermsBox = styled.div`
  margin-bottom: 48px;

  p {
    text-align: left;
    color: var(--main-font);
    font-size: 14px;
    font-style: normal;
    line-height: normal;

    span {
      color: var(--caution-color);
    }

    a {
      color: var(--keyColor-main);
      text-decoration: none;
      font-weight: 600;
    }
  }

  & > p {
    font-weight: 600;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 16px;
  }
`;

// 공통 스타일
export const SubmitButton = styled.button`
  margin-bottom: 48px;
  width: 368px;
  height: 42px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: var(--gray-01);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
  background: ${({ disabled }) =>
    disabled ? "var(--gray-05)" : "var(--keyColor-main)"};
`;

export const InputBox = styled(FlexContainer)<FlexContainerProps & AuthProps>`
  box-sizing: border-box;
  width: 368px;
  height: 42px;
  padding: 12px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--gray-05);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;

    svg {
      fill: var(--gray-05);
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--gray-05);
  }

  &:focus-within {
    /* border: 1px solid var(--gray-07); */
    border: 1px solid
      ${({ $isValidEmail }) =>
        $isValidEmail ? "var(--gray-07)" : "var(--caution-color)"};

    svg {
      fill: var(--gray-07);
    }
  }
`;

export const CautionText = styled.p`
  margin-top: 6px;
  text-align: left;
  color: var(--caution-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
