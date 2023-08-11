import { styled, css } from "styled-components";
import { ButtonProps } from "./types/ButtonType";

const heights = { low: `32px`, medium: `42px`, high: `48px` };
const widths = { short: `80px`, medium: `167px`, long: `368px` };

const CustomBtn = styled.button<ButtonProps>`
  ${({ $shape, $status }) => {
    let status: string =
      $status === "active" ? "var(--keyColor-main)" : "var(--gray-05)";

    switch ($shape) {
      case "filled":
        return css`
          background: ${status};
          border: none;
          color: var(--gray-01);
        `;
      case "solid":
        return css`
          background: var(--gray-01);
          border: 1px solid ${status};
          color: ${status};
        `;
      default:
        return ``;
    }
  }};

  ${({ $height }) => {
    switch ($height) {
      case "low":
        return css`
          height: ${heights.low};
          font-size: 12px;
        `;
      case "medium":
        return css`
          height: ${heights.medium};
          font-size: 14px;
        `;
      case "high":
        return css`
          height: ${heights.high};
          font-size: 16px;
        `;
      default:
        return ``;
    }
  }};

  width: ${({ $width }) => {
    switch ($width) {
      case "short":
        return widths.short;
      case "medium":
        return widths.medium;
      case "long":
        return widths.long;
      default:
        return ``;
    }
  }};

  /* 버튼 공통 부분 */
  border-radius: 8px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
  cursor: pointer;
`;

export { CustomBtn };
