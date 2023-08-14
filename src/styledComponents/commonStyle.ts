import { styled } from "styled-components";
import { CustomBtn } from "./Buttons";
import FlexContainer, { FlexContainerProps } from "./Flexbox";
import { ButtonProps } from "./types/ButtonType";
import { AuthProps } from "./types/AuthType";

export const MarginLayout = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  padding: 0 32px;
`;

export const Devider = styled.div`
  width: 368px;
  height: 0.5px;
  background: var(--gray-05);
`;

export const InputWithP = styled.div`
  p:first-child {
    color: var(--main-font);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    margin-bottom: 8px;
  }
`;

export const SubmitButton = styled(CustomBtn)<ButtonProps & AuthProps>`
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* border: 1px solid var(--gray-05); */
  border: 1px solid
    ${({ $isValidValue, $isDuplicated }) =>
      $isValidValue || $isDuplicated
        ? "var(--gray-05)"
        : "var(--caution-color)"};

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
      ${({ $isValidValue }) =>
        $isValidValue ? "var(--gray-07)" : "var(--caution-color)"};

    svg {
      fill: var(--gray-07);
    }
  }
`;

export const CautionText = styled.p`
  margin-top: 6px;
  width: 368px;
  text-align: left;
  color: var(--caution-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
