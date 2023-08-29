import { styled } from "styled-components";

export const HeaderLayout = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid var(--gray-03);
  background: var(--white-100);
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`;

export const HeaderWithTokenBox = styled(HeaderBox)`
  & > div {
    display: flex;
    align-items: center;
    gap: 32px;

    div {
      display: flex;
      width: 320px;
      padding: 7px 10px;
      gap: 8px;

      border-radius: 10px;
      background: var(--gray-02, #f4f4f4);

      input {
        flex: 1;
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
  }

  nav {
    display: flex;
    gap: 32px;
    align-items: center;

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }
  }
`;

export const HeaderProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
`;
