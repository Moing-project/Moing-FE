import * as S from '../styledComponents/Footer'

export default function Footer() {
  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.ListBox>
          <li>회사 소개</li>
          <li>이용약관</li>
          <li>개인정보취급방칙</li>
          <li>고객센터</li>
        </S.ListBox>
        <div>
        <p>(주)모잉 (대표이사:이노1조) | 대전광역시 대덕구 유성동 1234 피아체 505호</p>
        <p>전화번호 010-9999-9999 | 이메일 lyj9999@naver.com | 사업자등록번호 495-81-02340</p>
        </div>
        <h4 style={{marginTop : '10px'}}>@ Moing, Inc.</h4>
      </S.FooterContainer>
    </S.FooterLayout>
  )
}
