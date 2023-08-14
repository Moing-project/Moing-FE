// const ServiceModal = () => {} 요런식으로 해도 되공
// const PrivacyModal
//약관2개 컴포넌트 만들어서 각각 임포트해
import { styled } from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { CustomBtn } from '../../styledComponents/Buttons';
import { ButtonProps } from '../../styledComponents/types/ButtonType';
// import { SubmitButton } from '../../styledComponents/Auth';

export const ServiceModalTitle = styled.div`
  width: 550px;
  height: 40px;
  padding: 15px;

  left: 0;
`;
export const Closebutton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border: none;
  background-color: white;
`;
export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  align-items: center;
  position: relative;
  background: white;
  z-index: 10;
  width: 550px;
  height: 440px;
  padding: 15px;
  border-radius: 8px;
  /* div:first-child { */
  /* div:nth-child(2) {
    position: absolute;
    top: 20px;
    right: 50px; */
  /* border: 0; */
  /* border: none; */
  /* outline: none; */

  /* display: flex;
    justify-content: right; */
  /* background: none; */
  /* text-align: right; */

  //중간에 오는 div에 스타일 주고 싶을때
  div:nth-child(3) {
    display: flex;
    flex-direction: column;

    gap: 16px;
    overflow-y: scroll;
  }
  p {
    display: flex;

    /* gap: 12px; */
    /* align-items: rai; */
  }
  h1,
  h2 {
    color: #000000;
    font-weight: 600;
  }
`;
export const SubmitButton = styled(CustomBtn)<ButtonProps>`
  /* z-index: 10; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background: #3f40e9;
  /* transform: translateX(-50%); */
  width: 360px;
  height: 150px;
  margin: 5px 0 2px 0px;
  vertical-align: bottom;
`;
export interface Props {
  onClose: () => void;
}

const SignInModal: React.FC<Props> = ({ onClose }) => {
  return (
    <ModalLayout>
      <ServiceModalTitle>
        <h1> 서비스 이용약관</h1>
      </ServiceModalTitle>
      <div>
        <Closebutton onClick={onClose}>
          <Close />
        </Closebutton>
      </div>

      <div>
        <h2>제 1조 (목적)</h2>
        <p>
          본 약관은 이노1조㈜(이하 “회사”)가 운영하는 “모잉” 관련 제반 서비스의
          이용과 관련하여 회사와 이용기관 및 개인과의 권리, 의무 및 책임사항,
          기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>

        <h2>제 2조 (용어의 정의)</h2>

        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>

        <p>
          1. “모잉”(또는 "서비스")라 함은 ”회사”가 "고객"에게 제공하는 웹,
          PC설치형, Mobile App을 모두 포함한 메신저, 프로젝트, 캘린더, 조직도,
          파일함 등 관련 제반 서비스를 의미합니다.
        </p>

        <p>
          2. “고객”이라 함은 “회사”의 서비스에 접속하여 본 약관에 따라
          회원가입을 하여 “회사”가 제공하는 “서비스”를 받는 개인, 개인사업자,
          법인, 공공기관 등을 의미합니다.
        </p>

        <p>
          3. “구성원”이라 함은 “고객”으로부터 “서비스” 이용권한을 부여받아
          “고객”의 관리하에 “서비스”를 이용하는 자를 의미하며, “고객”으로부터
          부여받은 권한에 따라 “관리자” 및 “일반”으로 구분됩니다.
        </p>

        <p>
          4. “관리자”라 함은 “서비스”의 모든 관리 기능을 이용할 수 있고,
          “서비스”이용계약을 해지할 수 있는 “고객”본인 또는 “고객”을 대표・
          대리하는 “구성원”을 의미합니다.
        </p>

        <p>
          5. “일반”이라 함은 별다른 관리 권한 없이 “서비스”를 이용하는
          “구성원”을 의미합니다.
        </p>

        <p>
          6. “아이디(ID)”라 함은 고객의 식별과 서비스 이용을 위하여 고객이
          정하고 회사가 승인하는 문자와 숫자의 조합 또는 고객의 이메일 주소 또는
          “서비스”와 파트너쉽을 맺은 솔루션을 통해 등록된 이용계정을 의미합니다.
        </p>

        <p>
          7. “비밀번호”라 함은 고객이 설정한 아이디(ID)와 일치되는 고객임을
          확인하고 비밀보호를 위해 고객 자신이 정한 문자 또는 숫자의 조합을
          의미합니다.
        </p>

        <p>
          8. “고객의 정보”라 함은 고객이 회사의 서비스에 저장하는
          정보(『국가정보화기본법』 제 3 조 제 1호에 따른 정보, 개인인 경우에는
          개인정보와 신용정보를 포함합니다.)로써 고객이 소유 또는 관리하는
          정보를 의미합니다.
        </p>

        <p>
          9. “파트너”라 함은 회사를 위하여 서비스의 판매를 대행하는 사업자로서
          고객에 대한 문의응대, 계약관리 관리를 담당하는 사업자를 말합니다.
          다만, “파트너”와 “고객”간에 별도로 체결하는 계약이나 약정이 있는 경우,
          그 계약관계에는 본 약관이 적용되지 않습니다.
        </p>

        <h2>제 3조 (약관의 효력과 개정)</h2>

        <p>
          1. 본 약관은 “서비스”를 이용하기 위해 “고객”이 웹사이트 또는 모바일
          앱에 접속하여 약관의 내용에 동의를 한 다음 회원 가입 신청을 하여
          회사가 이를 승인함으로써 효력을 발휘합니다.
        </p>

        <p>
          {' '}
          2. “회사”는 본 약관의 내용을 “고객”이 쉽게 알 수 있도록 서비스
          초기화면에 게시합니다.
        </p>

        <p>
          3. “회사”는 ‘약관의 규제에 관한 법률’, ‘정보통신망이용촉진 및 정보보호
          등에 관한 법률’, ‘클라우드 컴퓨팅 발전 및 이용자보호에 관한 법률’ 등
          관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
        </p>

        <p>
          4. “회사”는 “서비스” 웹사이트 내 수정 약관의 게시 등 합리적인 방법을
          통해 약관을 수정할 수 있습니다. 이때 회사는 약관 수정 사항의 효력이
          발생하기 최소 7일 전에 효력 발생일과 자세한 내용을 명시하여 회사
          서비스 웹사이트를 통해 이를 공지합니다.
        </p>

        <p>
          5. “회사”가 전항에 따라 개정약관을 공지 또는 통지하면서 고객에게 7일
          기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을
          명확하게 공지 또는 통지하였음에도 고객이 명시적으로 거부의 의사표시를
          하지 아니한 경우, 고객이 개정 약관에 동의한 것으로 봅니다.
        </p>

        <p>
          6. 고객이 개정약관의 적용에 동의하지 않는 경우 개정 약관 적용 전일까지
          회사 또는 고객은 “서비스” 를 탈퇴 또는 이용계약을 해지할 수 있습니다.
          이 경우 회사는 고객에게 서면, 전자우편 또는 이에 준하는 방법으로 해지
          사유, 해지일, 환급 비용을 통지합니다.
        </p>

        <p>
          7. “고객”이 책임질 수 없는 사정(개정 약관에 관한 공지 기간 동안
          “서비스”에 접속하지 않았다는 사정은 ‘책임질 수 없는 사정’에 해당하지
          않는 것으로 합니다.)으로 전항의 회원 탈퇴 조치를 취하지 못한 경우,
          그러한 사정을 입증하여 ‘책임질 수 없는 사정’이 소멸한 즉시 회원 탈퇴
          조치를 취할 수 있습니다.
        </p>
      </div>

      <SubmitButton
        type="submit"
        $shape="filled"
        $status="active"
        $width="long"
        $height="medium"
        onClick={onClose}
      >
        확인
      </SubmitButton>
    </ModalLayout>
  );
};
export default SignInModal;
