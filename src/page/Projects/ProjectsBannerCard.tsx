import React, { useEffect, useState } from "react";
import { ProjectBannerSection } from "../../styledComponents/Projects";
import { PrimaryBtn } from "../../components/Buttons";
import { WorkStackEnum } from "../../types/WorkEnums";
import { useNavigate } from "react-router-dom";

export default function ProjectsBannerCard({ card }: any) {
  const { id, subject, title, stacks, endTime, bannerImg } = card;
  console.log(endTime);

  const navigate = useNavigate();

  const handleBannerClick = () => {
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

  return (
    <ProjectBannerSection onClick={handleBannerClick} $isExpired={isExpired}>
      <figure>
        <img src={bannerImg} alt="" />
      </figure>
      <figcaption>
        <h1>
          [{subject}] {title}
        </h1>
        <ul>
          {stacks.map((stack: any, index: any) => (
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
        </ul>
      </figcaption>
      <p>
        {endTime === null
          ? "모집 시 마감"
          : isExpired
          ? "모집 마감"
          : `모집 마감까지 D-${daysRemaining}`}
      </p>
    </ProjectBannerSection>
  );
}
