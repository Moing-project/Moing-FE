import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function ProjectsListItem({ project }: any) {
  const { id, name, stacks, imageSrc, introduce, endTime } = project;

  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/project/${id}`);
  };

  const [isExpired, setIsExpired] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const currentTime = new Date();
    const endDateTime = new Date(endTime);

    if (endDateTime <= currentTime) {
      setIsExpired(true);
    } else {
      setIsExpired(false);
      const timeDiff = endDateTime.getTime() - currentTime.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysRemaining(days);
    }
  }, [endTime]);

  return (
    <ProjectListCardLi onClick={handleItemClick}>
      <div className="head">
        <img src={imageSrc} alt="" />
        <div>
          <p>{name}</p>
          <ul>
            {stacks.map((stack: any, index: any) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="body">
        <p className="introduce">{introduce}</p>
        <p className="state">
          {isExpired ? "마감" : `모집 마감까지 D-${daysRemaining}`}
        </p>
      </div>
    </ProjectListCardLi>
  );
}

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
