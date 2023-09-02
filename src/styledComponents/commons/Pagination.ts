import { styled } from "styled-components";

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    margin: 0 10px;
  }
`;

export const PaginationNaviBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  &.active {
    svg {
      fill: #202020;
    }
  }

  &.inactive {
    svg {
      fill: #a6a6a6;
    }
  }
`;

export const PaginationPageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;

  &.active {
    background: var(--keyColor-01);

    svg {
      fill: #202020;
    }
  }

  &.inactive {
    svg {
      fill: #a6a6a6;
    }
  }
`;
