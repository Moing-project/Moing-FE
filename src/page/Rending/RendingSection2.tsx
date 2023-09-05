import { useRef } from "react";
import { PrimaryBtn } from "../../components/Buttons";
import useIntersectionObsever from "../../hooks/useIntersectionObserver";
import * as S from "../../styledComponents/Randing";
import {
  ProjectsDetail,
  ProjectsImg,
  ProjectsSearch,
} from "../../components/UsingImages";
import { rendingSettings } from "./SliderOption";
import { useNavigate } from "react-router-dom";

function RendingSection2() {
  // 애니메이션 줄 ref Element
  const ref = useRef<HTMLDivElement | null>(null);
  // 인터젝션 옵저버 훅에 ref를 넘겨준다.
  const isInViewport = useIntersectionObsever(ref);

  const navigate = useNavigate();

  return (
    <div>
      <S.RendingSection style={{ background: "var(--keyColor-02)" }}>
        <S.RendingContainer
          ref={ref}
          className={isInViewport ? "animation" : ""}
          $isInViewport={isInViewport}
        >
          <S.RandingBox $Direction="column" $gap={70}>
            <div style={{ textAlign: "center" }}>
              <h2>
                먼저 함께하고 싶은
                <br />
                프로젝트를 찾아보세요
              </h2>
              <br />
              <PrimaryBtn
                onClick={() => {
                  navigate("/projects");
                }}
                $shape="filled"
                $status="active"
                $width="long"
                $height="high"
              >
                프로젝트 찾기
              </PrimaryBtn>
            </div>
            <S.RandingSlider {...rendingSettings}>
              <ProjectsImg />
              <ProjectsSearch />
              <ProjectsDetail />
            </S.RandingSlider>
          </S.RandingBox>
        </S.RendingContainer>
      </S.RendingSection>
    </div>
  );
}
export default RendingSection2;
