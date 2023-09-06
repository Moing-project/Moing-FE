import { styled } from "styled-components";
import { Devider } from "./commons/commonStyle";

export const ProjectsMekeLayout = styled.form`
  margin: 80px auto;
  max-width: 800px;

  header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 70px;
    h1 {
      color: var(--unnamed, #3f40e9);
      font-size: 30px;
      font-weight: 600;
    }
    p {
      color: var(--gray-06, #7d7d7d);
      font-size: 20px;
      font-weight: 500;
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 18px;
    row-gap: 40px;
    margin-bottom: 40px;

    div {
      p {
        margin-bottom: 10px;
        color: var(--01, #202020);
        font-size: 16px;
        font-weight: 600;
      }
      input {
        height: 28px;
      }
      .defaultInput {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        padding: 12px;
        height: 42px;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #c1c1c1;
      }
      .css-1jqq78o-placeholder {
        color: var(--gray-05, #a6a6a6);
        font-size: 14px;
      }
    }
  }

  .introduce {
    margin-bottom: 40px;
    .title {
      margin-bottom: 10px;
      color: var(--01, #202020);
      font-size: 16px;
      font-weight: 600;
    }
  }

  nav {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
`;
