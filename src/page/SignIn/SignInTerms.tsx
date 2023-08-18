import * as S from "../../styledComponents/commons/Auth";
import * as C from "../../styledComponents/commons/commonStyle";
import CheckboxWithLabel from "../../components/CheckBoxs";
import { CautionText } from "../../styledComponents/commons/Inputs";
import { Link } from "react-router-dom";

interface SignInTermsProps {
  allAgreeCheck: boolean;
  handleAllAgreeChange: () => void;
  ageCheck: boolean;
  setAgeCheck: React.Dispatch<React.SetStateAction<boolean>>;
  termsCheck: boolean;
  setTermsCheck: React.Dispatch<React.SetStateAction<boolean>>;
  alarmCheck: boolean;
  setAlarmCheck: React.Dispatch<React.SetStateAction<boolean>>;
  handleServiceModalOpen: any;
  handleEmailMadalOpen: any;
}

export default function SignInTerms({
  allAgreeCheck,
  handleAllAgreeChange,
  ageCheck,
  setAgeCheck,
  termsCheck,
  setTermsCheck,
  alarmCheck,
  setAlarmCheck,
  handleEmailMadalOpen,
  handleServiceModalOpen,
}: SignInTermsProps) {
  return (
    <>
      <S.SignInTermsBox>
        <CheckboxWithLabel
          id="allAgreeCheck"
          checked={allAgreeCheck}
          onChange={handleAllAgreeChange}
        >
          전체 사항에 동의합니다.
        </CheckboxWithLabel>
        <C.Devider />
        <div>
          <CheckboxWithLabel
            id="ageCheck"
            checked={ageCheck}
            onChange={() => setAgeCheck(!ageCheck)}
          >
            <span>(필수)&nbsp;</span>만 14세 이상입니다.
          </CheckboxWithLabel>
          <CheckboxWithLabel
            id="termsCheck"
            checked={termsCheck}
            onChange={() => setTermsCheck(!termsCheck)}
          >
            <span>(필수)&nbsp;</span>
            <Link to="" onClick={handleServiceModalOpen}>
              서비스 이용약관
            </Link>
            ,
            <Link to="" onClick={handleEmailMadalOpen}>
              개인정보 처리약관
            </Link>
            에 동의합니다.
          </CheckboxWithLabel>
          <CheckboxWithLabel
            id="alarmCheck"
            checked={alarmCheck}
            onChange={() => setAlarmCheck(!alarmCheck)}
          >
            (선택)&nbsp;<Link to="">혜택 알림 수신</Link>에 동의합니다.
          </CheckboxWithLabel>
        </div>
      </S.SignInTermsBox>
      {(!ageCheck || !termsCheck) && (
        <CautionText>필수사항에 동의해주세요.</CautionText>
      )}
    </>
  );
}
