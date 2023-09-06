import { styled } from "styled-components";

export type ProjectListCardLiProps = {
  $isExpired: boolean;
};

export const ProjectsLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 72px auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90vw;
    height: fit-content;
    overflow: hidden;
    margin-bottom: 72px;
  }

  .mainTitle {
    text-align: left;
    color: var(--01, #202020);
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
  }
`;

export const ProjectsListUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 40vh;
  gap: 30px;
  margin-bottom: 72px;
`;

export const ProjectListLi = styled.li`
  box-sizing: border-box;
  padding: 25px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ProjectListMakeLi = styled(ProjectListLi)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h1 {
    color: var(--font-main);
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 122.222% */
  }

  p {
    color: #858585;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 121.429% */
  }
`;

export const ProjectListCardLi = styled(ProjectListLi)<ProjectListCardLiProps>`
  position: relative;

  .head {
    display: flex;
    gap: 12px;
    height: 90px;

    img {
      border-radius: 16px;
      width: 90px;
      height: 90px;
      flex-shrink: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;

      p {
        color: var(--01, #202020);
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 122.222% */
      }

      ul {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;

        span {
          color: var(--01, #202020);
          font-family: Pretendard Variable;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
        }
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;

    .introduce {
      color: #858585;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }

    .state {
      position: absolute;
      left: 25px;
      bottom: 25px;
      color: ${({ $isExpired }) =>
        $isExpired ? "var(--gray-06)" : "var(--unnamed, #3f40e9);"};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 14px; /* 100% */
    }
  }
`;

// 배너 슬라이더 카드
export const ProjectBannerSection = styled.section<ProjectListCardLiProps>`
  margin-bottom: 80px;

  figure {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      filter: brightness(60%);
    }
  }

  figcaption {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 14px 0;

    h1 {
      color: var(--01, #202020);

      /* display/02 섭제목 */
      font-family: Pretendard Variable;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 116.667% */
    }

    ul {
      display: flex;
      gap: 6px;
    }
  }

  p {
    color: ${({ $isExpired }) =>
      $isExpired ? "var(--gray-06)" : "var(--unnamed, #3f40e9);"};
  }
`;

export const ProjectListSection = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  article {
    display: flex;
    justify-content: space-between;

    nav {
      display: flex;
    }
  }
`;
