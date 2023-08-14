import * as S from "../../styledComponents/Auth";
import { ReactComponent as SignInDone1 } from "../../assets/elements/signindone1.svg";
import { ReactComponent as SignInDone2 } from "../../assets/elements/signindone2.svg";
import { PrimaryBtn } from "../../components/Buttons";
import { Link } from "react-router-dom";

export default function SignInDone() {
  return (
    <S.SignInLayout $direction="column" $align="center">
      <div>
        <h1>
          <span>모잉</span>에 가입이 완료되었습니다! 🎉
        </h1>
        <p>
          모잉에서 펼칠 멋진 모임을 <br />늘 응원할게요
        </p>
      </div>
      <section>
        <SignInDone1 />
        <SignInDone2 />
      </section>
      <Link to="/login">
        <PrimaryBtn
          $shape="filled"
          $status="active"
          $width="long"
          $height="medium"
        >
          로그인하기
        </PrimaryBtn>
      </Link>
    </S.SignInLayout>
  );
}
