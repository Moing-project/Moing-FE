import { Link } from "react-router-dom";
import * as S from "../../styledComponents/Auth";

export default function SignIn() {
  return (
    <S.SignInLayout direction="column" align="center">
      <div>
        <h1>
          <span>모잉</span>에 오신 것을 환영합니다! 👋
        </h1>
        <p>
          그 누구보다 간편히 <br />
          프로젝트를 즐길 준비 되셨나요?
        </p>
      </div>
      <S.SignInFormBox direction="column" gap="24px">
        <div>
          <p>아이디</p>
          <S.InputBox></S.InputBox>
          {/* <S.CautionText>이메일 주소 형식으로 입력해주세요.</S.CautionText> */}
        </div>
        <div>
          <p>이름</p>
          <S.InputBox></S.InputBox>
          {/* <S.CautionText>이미 존재하는 이름입니다.</S.CautionText> */}
        </div>
        <div>
          <p>비밀번호</p>
          <S.InputBox></S.InputBox>
          {/* <S.CautionText>
            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
          </S.CautionText> */}
        </div>
        <div>
          <p>비밀번호 확인</p>
          <S.InputBox></S.InputBox>
          {/* <S.CautionText>위와 동일한 비밀번호를 입력해주세요.</S.CautionText> */}
        </div>
      </S.SignInFormBox>
      <S.SignInTermsBox>
        <p>
          <input type="checkbox" /> 전체 사항에 동의합니다.
        </p>
        <S.Devider />
        <div>
          <p>
            <input type="checkbox" /> <span>(필수)</span> 만 14세 이상입니다.
          </p>
          <p>
            <input type="checkbox" /> <span>(필수) </span>
            <Link to="">서비스 이용약관</Link>,&nbsp;
            <Link to="">개인정보 처리약관</Link>에 동의합니다.
          </p>
          <p>
            <input type="checkbox" /> (선택) <Link to="">혜택 알림 수신</Link>에
            동의합니다.
          </p>
        </div>
      </S.SignInTermsBox>
      <S.SubmitButton type="submit">로그인</S.SubmitButton>
      <nav>
        이미 가입하셨나요? <Link to="">로그인</Link>
      </nav>
    </S.SignInLayout>
  );
}
