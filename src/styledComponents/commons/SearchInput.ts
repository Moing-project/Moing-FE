import { styled } from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  padding: 7px 10px;
  gap: 8px;

  border-radius: 10px;
  background: var(--gray-02, #f4f4f4);

  input {
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
`;
