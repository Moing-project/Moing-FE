import { styled } from "styled-components";

type SearchBoxProps = {
  $isEmpty?: boolean;
};

export const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px;

  border-radius: 10px;
  background: var(--gray-02, #f4f4f4);

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      width: 80%;
      background: none;
      outline: none;
      border: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;

      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 12px; /* 85.714% */
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;

    svg {
      fill: ${({ $isEmpty }) => ($isEmpty ? "none" : "var(--gray-06)")};
    }
  }
`;
