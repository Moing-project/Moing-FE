import { useRef } from "react";
import { PrimaryBtn } from "../../components/Buttons";
import useIntersectionObsever from "../../hooks/useIntersectionObserver";
import * as S from "../../styledComponents/Randing";
import {
  WorkspaceIssueImg,
  WorkspaceKanbanImg,
  WorkspaceMain,
  Workspaces,
} from "../../components/UsingImages";
import { rendingSettings } from "./SliderOption";

function RendingSection3({ handleScroll }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIntersectionObsever(ref);

  return (
    <div>
      <S.RendingSection style={{ background: "#e8e8fc" }}>
        <S.RendingContainer
          ref={ref}
          className={isInViewport ? "animation" : ""}
          $isInViewport={isInViewport}
        >
          <S.RandingBox $Direction="column" $gap={100}>
            <div style={{ textAlign: "center" }}>
              <h2>
                워크스페이스로 바로 이동해
                <br />
                쉽게 프로젝트를 관리해요
              </h2>
              <br />
              <PrimaryBtn
                onClick={handleScroll}
                $shape="filled"
                $status="active"
                $width="long"
                $height="high"
              >
                워크스페이스 보기
              </PrimaryBtn>
            </div>
            <S.RandingSlider {...rendingSettings}>
              <Workspaces />
              <WorkspaceMain />
              <WorkspaceKanbanImg />
              <WorkspaceIssueImg />
            </S.RandingSlider>
          </S.RandingBox>
        </S.RendingContainer>
      </S.RendingSection>
    </div>
  );
}
export default RendingSection3;
