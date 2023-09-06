import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as S from "../../styledComponents/Projects";
import { WorkStackEnum } from "../../types/WorkEnums";
import { PrimaryBtn } from "../../components/Buttons";

export default function ProjectsListItem({ project }: any) {
  const { id, subject, title, thumnail, intro, endTime, stacks } = project;

  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/projects/${id}`);
  };

  const [isExpired, setIsExpired] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // 마감 디데이
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

  const MAX_VISIBLE_STACKS = 3; // 보여줄 최대 스택 수
  const visibleStacks = stacks.slice(0, MAX_VISIBLE_STACKS);
  const hiddenStacks = stacks.slice(MAX_VISIBLE_STACKS);
  const remainingStacks = stacks.length - MAX_VISIBLE_STACKS;

  return (
    <S.ProjectListCardLi onClick={handleItemClick} $isExpired={isExpired}>
      <div className="head">
        <img src={thumnail} alt="" />
        <div>
          <p>
            [{subject}] {title}
          </p>
          <ul>
            {visibleStacks.map((stack: any, index: any) => (
              <PrimaryBtn
                $shape="solid"
                $status="active"
                $width="xshort"
                $height="xlow"
                key={index}
              >
                {WorkStackEnum[stack as keyof typeof WorkStackEnum]}
              </PrimaryBtn>
            ))}
            {hiddenStacks.length > 0 && <span>+{remainingStacks}</span>}
          </ul>
        </div>
      </div>
      <div className="body">
        <p className="introduce">
          {intro && intro.length > 150
            ? intro.substring(0, 150) + "..."
            : intro}
        </p>
        <p className="state">
          {endTime === ""
            ? "모집 시 마감"
            : isExpired
            ? "모집 마감"
            : `모집 마감까지 D-${daysRemaining}`}
        </p>
      </div>
    </S.ProjectListCardLi>
  );
}
