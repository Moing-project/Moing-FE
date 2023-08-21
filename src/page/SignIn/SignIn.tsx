import { Link } from "react-router-dom";
import * as S from "../../styledComponents/commons/Auth";
import SignInForms from "./SignInForms";

export default function SignIn() {
  return (
    <S.SignInLayout $direction="column" $align="center">
      <div>
        <h1>
          <span>모잉</span>에 오신 것을 환영합니다! 👋
        </h1>
        <p>
          그 누구보다 간편히 <br />
          프로젝트를 즐길 준비 되셨나요?
        </p>
      </div>
      <SignInForms />
      <nav>
        이미 가입하셨나요? <Link to="/login">로그인</Link>
      </nav>
    </S.SignInLayout>
  );
}
