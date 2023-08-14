import { styled } from 'styled-components';
import emotionStyled from '@emotion/styled/macro';
import FlexContainer, { FlexContainerProps } from './Flexbox';
import { CustomBtn } from './Buttons';
import { ButtonProps } from './types/ButtonType';

<<<<<<< HEAD
<<<<<<< HEAD
export interface AuthProps {
  $isValidValue?: boolean;
  $isEmpty?: boolean;
}

=======
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
export interface AuthProps {
  $isValidValue?: boolean;
  $isEmpty?: boolean;
}

>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5797968 ([style] 병합 후 구조 수정)

    span {
      color: var(--keyColor-main);
    }
<<<<<<< HEAD
=======
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)

    input[id='autoLogin'] {
      display: none;
    }

    label {
<<<<<<< HEAD
<<<<<<< HEAD
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-right: 6px;
      }
    }
=======
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
      margin-left: 6px;
=======
      display: flex;
      align-items: center;
>>>>>>> 55cc28e ([modify] 입력값 유효성 검사 조건부 렌더링 수정)
      cursor: pointer;

      svg {
        margin-right: 6px;
      }
    }
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
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
    margin-top: 12px;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7cec77f ([add] 필수사항 동의 문구 추가)

  & > p {
    margin-bottom: 6px;
  }
`;

export const SignInFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
=======
`;

<<<<<<< HEAD
export const SignInFormBox = styled(FlexContainer)<FlexContainerProps>`
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
export const SignInFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
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
<<<<<<< HEAD
<<<<<<< HEAD
    display: flex;
    align-items: center;
=======
    text-align: left;
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
    display: flex;
    align-items: center;
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
    color: var(--main-font);
    font-size: 14px;
    font-style: normal;
    line-height: normal;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
    input[id="allAgreeCheck"],
    input[id="ageCheck"],
    input[id="termsCheck"],
    input[id="alarmCheck"] {
=======
    input[id='allAgreeCheck'],
    input[id='ageCheck'],
    input[id='termsCheck'],
    input[id='alarmCheck'] {
>>>>>>> 629fcdd ([add] 모달 기능 추가)
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-right: 6px;
      }
    }

<<<<<<< HEAD
=======
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
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

// 모달 스타일
export const ModalBody = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;  
  position: relative;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #FFFFFF;;
  max-height: calc(100vh - 16px);
  overflow: hidden;
  padding-block: 50px;
  padding-inline: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: var(--gray-06);
  text-align: center;

  h2{
    color: #000000;
    font-weight: 700;
  }

  section{
  div {
   position: relative;
   display : flex;
   justify-content : center;
   align-items : center;
   margin-top:10px;
    input {
      border:none;
      text-align: center;
      font-weight : 600;
      &:focus{
        outline:none;
      }
    }
    h3{
      position: absolute;
      right: 0;
      text-align: right;
      color: #FF0000;
    }
  }
}
  
  h4{
    text-align: right;
    color: #000000;
    margin-top: 16px;
    font-size: 14px;

  }

`;

// 공통 스타일
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const SubmitButton = styled.button<AuthProps>`
=======
export const SubmitButton = styled.button`
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
export const SubmitButton = styled.button<AuthProps>`
>>>>>>> 55cc28e ([modify] 입력값 유효성 검사 조건부 렌더링 수정)
=======
export const SubmitButton = styled(CustomBtn)<ButtonProps & AuthProps>`
<<<<<<< HEAD
>>>>>>> e15b50e ([modify, style] 닉네임 유효성 버튼 활성화 수정, 버튼 스타일 컴포넌트 수정)
  margin-bottom: 48px;
=======
>>>>>>> 629fcdd ([add] 모달 기능 추가)
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  border-radius: 8px;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  background: var(--gray-05);
  border: none;
  cursor: pointer;

>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  color: var(--gray-01);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  border: none;
  cursor: pointer;
=======
>>>>>>> e15b50e ([modify, style] 닉네임 유효성 버튼 활성화 수정, 버튼 스타일 컴포넌트 수정)
  background: ${({ disabled }) =>
<<<<<<< HEAD
    disabled ? "var(--gray-05)" : "var(--keyColor-main)"};
<<<<<<< HEAD
=======
    disabled ? 'var(--gray-05)' : 'var(--keyColor-main)'};
>>>>>>> 629fcdd ([add] 모달 기능 추가)
`;

export const InputBox = styled(FlexContainer)<FlexContainerProps & AuthProps>`
=======
`;

export const InputBox = styled(FlexContainer)<FlexContainerProps>`
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
`;

export const InputBox = styled(FlexContainer)<FlexContainerProps & AuthProps>`
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
  box-sizing: border-box;
  width: 368px;
  height: 42px;
  padding: 12px;
  flex-shrink: 0;
  border-radius: 8px;
<<<<<<< HEAD
<<<<<<< HEAD
  background: #fff;
  /* border: 1px solid var(--gray-05); */
  border: 1px solid
<<<<<<< HEAD
<<<<<<< HEAD
    ${({ $isValidValue, $isEmpty }) =>
<<<<<<< HEAD
      $isValidValue || $isEmpty ? "var(--gray-05)" : "var(--caution-color)"};
=======
  border: 1px solid var(--gray-05);
  background: #fff;
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
  background: #fff;
<<<<<<< HEAD
  border: 1px solid var(--gray-05);
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
=======
  /* border: 1px solid var(--gray-05); */
  border: 1px solid
    ${({ $isValidEmail }) =>
      $isValidEmail ? "var(--gray-05)" : "var(--caution-color)"};
>>>>>>> 087cd96 ([add, modify] 로그인 페이지 아이콘 파일 분리, 로그인 폼 컴포넌트 분리/ 로그인 페이지 이메일 유효성 검사 공백 허용, border 수정)
=======
    ${({ $isValidEmail, $isEmail }) =>
      !$isValidEmail && $isEmail ? "var(--gray-05)" : "var(--caution-color)"};
>>>>>>> 55cc28e ([modify] 입력값 유효성 검사 조건부 렌더링 수정)
=======
    ${({ $isValidValue, $isEmpty }) =>
      $isValidValue || $isEmpty ? "var(--gray-05)" : "var(--caution-color)"};
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
=======
      $isValidValue || $isEmpty ? 'var(--gray-05)' : 'var(--caution-color)'};
>>>>>>> 629fcdd ([add] 모달 기능 추가)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    /* border: 1px solid var(--gray-07); */
    border: 1px solid
      ${({ $isValidValue, $isEmpty }) =>
<<<<<<< HEAD
        $isValidValue || $isEmpty ? "var(--gray-07)" : "var(--caution-color)"};
=======
    border: 1px solid var(--gray-07);
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
    /* border: 1px solid var(--gray-07); */
    border: 1px solid
      ${({ $isValidEmail }) =>
        $isValidEmail ? "var(--gray-07)" : "var(--caution-color)"};
>>>>>>> 7e00682 ([add, modify] useInput 커스텀 훅 수정, 로그인 페이지 이메일 검증, 조건부 렌더링 추가)
=======
    border: 1px solid var(--gray-07);
>>>>>>> 087cd96 ([add, modify] 로그인 페이지 아이콘 파일 분리, 로그인 폼 컴포넌트 분리/ 로그인 페이지 이메일 유효성 검사 공백 허용, border 수정)
=======
    /* border: 1px solid var(--gray-07); */
    border: 1px solid
<<<<<<< HEAD
      ${({ $isValidEmail, $isEmail }) =>
        !$isValidEmail && $isEmail ? "var(--gray-07)" : "var(--caution-color)"};
>>>>>>> 55cc28e ([modify] 입력값 유효성 검사 조건부 렌더링 수정)
=======
      ${({ $isValidValue, $isEmpty }) =>
        $isValidValue || $isEmpty ? "var(--gray-07)" : "var(--caution-color)"};
>>>>>>> 16c9200 ([add] 회원가입 틀 완성, 각 필드/제출 버튼 유효성 검사 구현)
=======
        $isValidValue || $isEmpty ? 'var(--gray-07)' : 'var(--caution-color)'};
>>>>>>> 629fcdd ([add] 모달 기능 추가)

    svg {
      fill: var(--gray-07);
    }
  }
`;

export const CautionText = styled.p`
  margin-top: 6px;
<<<<<<< HEAD
<<<<<<< HEAD
  width: 368px;
=======
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
  width: 368px;
>>>>>>> 7cec77f ([add] 필수사항 동의 문구 추가)
  text-align: left;
  color: var(--caution-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
