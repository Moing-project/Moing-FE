import { styled } from "styled-components";
import FlexContainer, { FlexContainerProps } from "./Flexbox";
import { AuthProps } from "../types/AuthType";

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
    ${({ $isValidValue, $isDuplicated, $isEmpty }) => {
      if ($isEmpty) {
        return "var(--gray-05)";
      } else if ($isDuplicated || !$isValidValue) {
        return "var(--caution-color)";
      } else {
        return "var(--gray-05)";
      }
    }};

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
      ${({ $isValidValue, $isDuplicated, $isEmpty }) => {
        if ($isEmpty) {
          return "var(--gray-07)";
        } else if ($isDuplicated || !$isValidValue) {
          return "var(--caution-color)";
        } else {
          return "var(--gray-07)";
        }
      }};

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
