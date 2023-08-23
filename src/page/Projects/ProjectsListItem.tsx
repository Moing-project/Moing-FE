import React from "react";
import { styled } from "styled-components";

type ProjectsBannerCardProps = {
  project: {
    id: number;
    type: string;
    imgUrl: string;
    name: string;
    stacks: string[];
    introduce: string;
    state: string;
  };
};

const ProjectsListItem: React.FC<ProjectsBannerCardProps> = ({ project }) => {
  const { type, name, stacks, state, imgUrl, introduce } = project;

  return (
    <ProjectListCardLi>
      <div className="head">
        <img src={imgUrl} alt="" />
        <div>
          <p>
            [{type}] {name}
          </p>
          <ul>
            {stacks.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="body">
        <p className="introduce">{introduce}</p>
        <p className="state">{state}</p>
      </div>
    </ProjectListCardLi>
  );
};

export default ProjectsListItem;

export const ProjectListLi = styled.li`
  box-sizing: border-box;
  padding: 18px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.1);
`;

const ProjectListCardLi = styled(ProjectListLi)`
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
        gap: 6px;

        li {
          display: flex;
          padding: 4px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;

          border-radius: 4px;
          background: var(--01, #b1b2f6);

          color: var(--01, #202020);

          /* body/03 */
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
    gap: 18px;
    margin-top: 24px;

    .introduce {
      height: 60px;

      color: #858585;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }

    .state {
      color: var(--unnamed, #3f40e9);
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 14px; /* 100% */
    }
  }
`;
