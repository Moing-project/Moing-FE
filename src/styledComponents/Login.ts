import { styled } from "styled-components";
import FlexContainer, { FlexContainerProps } from "./Flexbox";

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
  & > nav:first-child {
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

export const LoginFormBox = styled(FlexContainer)<FlexContainerProps>`
  h1 {
    margin-bottom: 24px;
    color: var(--main-font);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & > button {
    margin-bottom: 48px;
    display: flex;
    width: 368px;
    height: 42px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--gray-05);
    border: none;

    color: var(--gray-01);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const LoginForm = styled(FlexContainer)<FlexContainerProps>`
  margin-bottom: 16px;

  div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 368px;
    height: 42px;
    padding: 12px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--gray-05);
    background: #fff;

    input {
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
  }
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
