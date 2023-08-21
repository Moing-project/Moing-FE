import { styled } from "styled-components";
import FlexContainer, { FlexContainerProps } from "./Flexbox";

export const SignInServiceModalLayout = styled(
  FlexContainer
)<FlexContainerProps>`
  align-items: center;
  position: relative;
  background: white;
  z-index: 10;
  width: 550px;
  height: 600px;
  padding: 15px;
  border-radius: 8px;

  header {
    width: 550px;
    height: 40px;
    padding: 15px;
    left: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;

    p {
      display: flex;
    }

    h1,
    h2 {
      color: var(--main-font);
      font-weight: 600;
    }
  }
`;

export const Closebutton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border: none;
  background-color: #ffffff;
`;

// 모달 스타일
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  max-height: calc(100vh - 16px);
  overflow: hidden;
  padding-block: 50px;
  padding-inline: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: var(--gray-06);
  text-align: center;

  h2 {
    color: var(--font-main);
    font-weight: 700;
  }

  section {
    margin-top: 10px;

    article {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;

      input {
        border: none;
        text-align: center;
        font-weight: 600;

        &:focus {
          outline: none;
        }
      }

      h3 {
        position: absolute;
        right: 0;
        text-align: right;
        color: #ff0000;
        height: 20px;
      }
    }
  }

  & > div {
    text-align: right;
    color: var(--font-main);
    margin-top: 16px;
    font-size: 14px;
  }
`;
