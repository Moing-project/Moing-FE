import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailFloating.css";
import * as S from "../../styledComponents/ProjectDetail";
import ProjectDetailFloating from "./ProjectDetailFloating";
import { ProjectDetailDevider } from "../../styledComponents/ProjectDetail";
import { PrimaryBtn } from "../../components/Buttons";
import { useGetOneProjectQuery } from "../../redux/modules/ProjectAPI";
import { WorkAllowEnum, WorkStackEnum } from "../../types/WorkEnums";
import { marked } from "marked";

function convertMarkdownToHtml(markdown: any) {
  return { __html: marked(markdown) };
}

export default function ProjectDetail() {
  // params로 id 받아오기
  const { projectId } = useParams();

  // 통신
  const {
    data: projectItem,
    error,
    isLoading,
    refetch,
  } = useGetOneProjectQuery({
    projectId,
  });

  const endTime = projectItem?.lastTime;

  const [isExpired, setIsExpired] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // // 마감 디데이
  useEffect(() => {
    if (endTime) {
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
    }
  }, [endTime]);

  return (
    <S.ProjectDetailLayout>
      <div>
        <S.ProjectDetailMain>
          <S.Layout>
            <figure>
              <img
                src={projectItem?.imageSrc}
                className="card-mg-top"
                alt="..."
              />
            </figure>
            <div>
              <h1>
                [{projectItem?.subject}] {projectItem?.name}
              </h1>
              <Link to="">링크복사</Link>
              {/* Link -> a 태그 */}
            </div>
          </S.Layout>
          <ProjectDetailDevider />
          <S.Box1>
            <h2>프로젝트 정보</h2>
            <p>모집인원 | {projectItem?.totalMember}명 모집</p>
            {projectItem && (
              <p>
                멤버 참여 방식 |{" "}
                {
                  WorkAllowEnum[
                    projectItem.allowType as keyof typeof WorkAllowEnum
                  ]
                }
              </p>
            )}
            <p>
              모집 마감 기간 |{" "}
              {isExpired ? "마감" : `모집 마감까지 D-${daysRemaining}`}
            </p>
          </S.Box1>
          <S.Box2>
            <h2>사용 기술 스택</h2>
            <div>
              {projectItem?.stacks.map((stack, index) => (
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
            </div>
          </S.Box2>
          <ProjectDetailDevider />
          <S.Box3>
            {projectItem && (
              <S.restoredTagStyles
                dangerouslySetInnerHTML={convertMarkdownToHtml(
                  projectItem?.introduce
                )}
              />
            )}
          </S.Box3>
        </S.ProjectDetailMain>
        <div>
          {projectItem && (
            <ProjectDetailFloating
              members={projectItem?.members}
              allowType={projectItem?.allowType}
            />
          )}
        </div>
      </div>
    </S.ProjectDetailLayout>
  );
}
