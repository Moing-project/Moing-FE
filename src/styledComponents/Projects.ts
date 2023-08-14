import { styled } from "styled-components";
import FlexContainer from "./Flexbox";
import { Devider } from "./commonStyle";

export const ProjectsMekeLayout = styled(FlexContainer)`
  max-width: 752px;
  margin: 72px auto;
  background-color: aliceblue;

  & > div:first-child {
    h1 {
      margin-bottom: 12px;
      color: var(--main-font);
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 38px;
      color: var(--keyColor-main);
    }

    & > p {
      color: var(--gray-06);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 130% */
    }
  }
`;

export const ProjectsMekeFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin: 88px 0 56px 0;
`;

export const ProjectsMekeFormBoxRow = styled(FlexContainer)``;

export const ProjectsMekeDevider = styled(Devider)`
  width: 100%;
`;
