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
import axios from "axios";
import { copyToClipboard } from "../../utils/clipboard";
import { Share } from "../../components/UsingIcons";

function convertMarkdownToHtml(markdown: any) {
  return { __html: marked(markdown) };
}

export default function ProjectDetail({ hasToken }: any) {
  // params로 id 받아오기
  const { projectId } = useParams();

  const [copySuccess, setCopySuccess] = useState(false); // 복사 완료 상태를 관리하는 상태

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    copyToClipboard(currentUrl, () => {
      setCopySuccess(true); // 복사 성공 시 상태를 true로 업데이트
    });
  };

  // 통신
  // const {
  //   data: projectItem,
  //   error,
  //   isLoading,
  //   refetch,
  // } = useGetOneProjectQuery({
  //   projectId,
  // });

  const [projectItem, setProjectItem] = useState<any>(null);

  const endTime = projectItem?.lastTime;

  const [isExpired, setIsExpired] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    // Axios를 사용하여 JSON 서버에서 특정 ID의 항목을 가져옵니다.
    axios
      .get(`http://localhost:3001/team/${projectId}`)
      .then((response: any) => {
        setProjectItem(response.data);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, [projectId]);

  // 마감 디데이
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
              <img src={projectItem?.thumnail} alt="..." />
            </figure>
            <div>
              <h1>
                [{projectItem?.subject}] {projectItem?.title}
              </h1>
              <button className="linkBtn" onClick={handleCopyLink}>
                <Share />
                <p>{copySuccess ? "복사 완료!" : "링크 복사"}</p>
              </button>
            </div>
          </S.Layout>
          <ProjectDetailDevider />
          <S.Box1>
            <h2>프로젝트 정보</h2>
            <p>모집인원 | {String(projectItem?.needMember)}명 모집</p>
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
              {endTime === undefined
                ? "모집 시 마감"
                : isExpired
                ? "모집 마감"
                : `모집 마감까지 D-${daysRemaining}`}
            </p>
          </S.Box1>
          <S.Box2>
            <h2>사용 기술 스택</h2>
            <div>
              {projectItem?.stacks.map((stack: any, index: any) => (
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
              leader={projectItem?.leader}
              hasToken={hasToken}
            />
          )}
        </div>
      </div>
    </S.ProjectDetailLayout>
  );
}
