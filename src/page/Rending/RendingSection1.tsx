import { forwardRef, useRef } from "react";
import { PrimaryBtn } from "../../components/Buttons";
import useIntersectionObsever from "../../hooks/useIntersectionObserver";
import * as S from "../../styledComponents/Randing";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ProjectsImg,
  WorkspaceIssueImg,
  WorkspaceKanbanImg,
} from "../../components/UsingImages";
import { rendingSettings } from "./SliderOption";

function RendingSection1({ handleScroll }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIntersectionObsever(ref);

  return (
    <div>
      <S.RendingSection>
        <S.RendingContainer
          ref={ref}
          className={isInViewport ? "animation" : ""}
          $isInViewport={isInViewport}
        >
          <S.RandingBox $gap={100}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "80px" }}
            >
              <div>
                <div>
                  <h2>
                    모집과 협업을 한번에!
                    <br />
                    모두 있는 모임 공간{" "}
                    <span style={{ color: "var(--keyColor-main)" }}>모잉</span>
                  </h2>
                </div>
                <div style={{ color: "var(--gray-06)" }}>
                  <br />
                  <p>
                    내가 원하는 프로젝트를 바로 찾아
                    <br />
                    바로 협업을 펼쳐보아요!
                  </p>
                </div>
              </div>
              <Link to="">
                <PrimaryBtn
                  onClick={handleScroll}
                  $shape="filled"
                  $status="active"
                  $width="long"
                  $height="high"
                >
                  모잉 둘러보기
                </PrimaryBtn>
              </Link>
            </div>
            <S.RandingSlider {...rendingSettings}>
              <ProjectsImg />
              <WorkspaceIssueImg />
              <WorkspaceKanbanImg />
            </S.RandingSlider>
          </S.RandingBox>
        </S.RendingContainer>
      </S.RendingSection>
    </div>
  );
}

export default forwardRef(RendingSection1);
