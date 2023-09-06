import { styled } from "styled-components";
import { Devider } from "./commons/commonStyle";

export const ProjectDetailLayout = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 72px auto;

  & > div {
    display: flex;
    gap: 40px;
  }
`;

export const ProjectDetailMain = styled.main`
  min-width: 655px;
`;

export const ProjectDetailDevider = styled(Devider)`
  width: 100%;
  background: var(--gray-03);
  margin: 48px 0;
`;

export const Layout = styled.div`
  display: flex;
  // height: 128px;
  gap: 24px;
  margin-bottom: 30px;

  figure {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    /* border: 1px solid;
    border-color: red; */

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 30px;
      line-height: 38px;
      font-weight: 500;
    }

    .linkBtn {
      svg {
        margin-right: 5px;
      }

      display: flex;
      align-items: center;
      width: fit-content;
      border: none;
      background: none;
      color: #7d7d7d;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const Box1 = styled.div`
  /* width: 700px;
  height: 100px; */
  top: 260px;
  right: 50;
  display: flex;
  flex-direction: column;
  /* border: 1px solid;
  border-color: red; */

  gap: 16px;
  margin: 50px 0 50px 0;

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    display: flex;
    color: #7d7d7d;
    font-size: 16px;
    font-weight: 500px;
    /* letter-spacing: 2px;한줄당 글자 사이 간격  */
  }
`;

export const Box2 = styled.div`
  width: 100%;
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 4px;
  }
  p {
    /* display: grid; */
  }
`;

export const Box3 = styled.div`
  /* width: 700px;
  height: 100px; */

  top: 260px;
  right: 50;
  /* padding: 20px; */

  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 16px;

  figure {
    width: 100%;
    height: 216px;
    object-fit: cover;

    /* border: 1px solid;
    border-color: red; */
    img {
      width: 384px;
      /* height: 120px; */
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    gap: 3px;
  }
  h3 {
    font-size: 30px;
    line-height: 48px;
    font-weight: 500;
    gap: 3px;
  }
  & > p {
    display: flex;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    bottom: 0;
    /* gap: 300px; */
  }
`;

export const restoredTagStyles = styled.div`
  h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 1em 0;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 1em 0;
  }

  h3 {
    font-size: 1.17em;
    font-weight: bold;
    margin: 1em 0;
  }

  p {
    font-size: 1em;
    margin: 1em 0;
  }

  ul {
    margin: 1em 0;
    padding-left: 1.2em;
  }

  ol {
    margin: 1em 0;
    padding-left: 1.2em;
  }

  li {
    font-size: 1em;
  }

  blockquote {
    border-left: 5px solid #ccc;
    margin: 1em 0;
    padding-left: 1em;
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1em 0;
  }
`;
