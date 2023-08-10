import { useRef } from "react"
import { PrimaryBtn } from "../../components/Buttons"
import useIntersectionObsever from "../../hooks/useIntersectionObserver"
import * as S from '../../styledComponents/Randing'
import {ReactComponent as PageIntro} from '../../assets/images/img.svg'


function Section2() {
  // 애니메이션 줄 ref Element
  const ref = useRef<HTMLDivElement | null>(null)
  // 인터젝션 옵저버 훅에 ref를 넘겨준다.
  const isInViewport = useIntersectionObsever(ref)
  return (
    <div>
          <S.RendingSection>
            <S.RendingContainer ref={ref} className={isInViewport ? 'animation' : ''} $isInViewport = {isInViewport}>
            <S.RandingBox $Direction="column" $gap ={100}>
            <div style={{textAlign : 'center'}}>
              <h2>먼저 함께하고 싶은<br/>프로젝트를 찾아보세요</h2><br/>
              <PrimaryBtn $size='large' $bc='var(--keyColor-main)' $fontcolor="white">프로젝트 찾기</PrimaryBtn>
            </div>
            <div style={{display : 'flex', justifyContent : 'center'}}>
            {/* <img src={process.env.PUBLIC_URL + './images/img.svg'} alt="페이지 소개1"/> */}
            <PageIntro/>
            </div>
            </S.RandingBox>
            </S.RendingContainer>
          </S.RendingSection>
    </div>
  )
}
export default Section2