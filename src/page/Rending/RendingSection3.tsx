import { useRef } from "react";
import { PrimaryBtn } from "../../components/Buttons";
import useIntersectionObsever from "../../hooks/useIntersectionObserver";
import * as S from "../../styledComponents/Randing";
import { ReactComponent as PageIntro } from "../../assets/images/img.svg";

function RendingSection3() {
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
          <S.RandingBox $Direction="column" $gap={100}>
            <div style={{ textAlign: "center" }}>
              <h2>
                워크스페이스로 바로 이동해
                <br />
                쉽게 프로젝트를 관리해요
              </h2>
              <br />
              <PrimaryBtn
                $shape="filled"
                $status="active"
                $width="long"
                $height="high"
                onClick={() => {
                  window.location.href = "moingspace.127.0.0.1:3000";
                }}
              >
                모잉 둘러보기
              </PrimaryBtn>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <img src={process.env.PUBLIC_URL + './images/img.svg'} alt="페이지 소개1"/> */}
              <PageIntro />
            </div>
          </S.RandingBox>
        </S.RendingContainer>
      </S.RendingSection>
    </div>
  );
}
export default RendingSection3;
