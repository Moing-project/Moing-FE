import { PrimaryBtn } from "../components/Buttons";
import * as S from "../styledComponents/Header";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderWithoutToken({ isRanding }: any) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSigninClick = () => {
    navigate("/signin");
  };

  return (
    <S.HeaderLayout $isRanding={isRanding}>
      <S.HeaderBox>
        <div>
          <Link to="">
            <Logo />
          </Link>
        </div>
        <nav style={{ display: "flex", gap: "10px" }}>
          <PrimaryBtn
            onClick={handleLoginClick}
            $shape="filled"
            $status="active"
            $width="short"
            $height="low"
          >
            로그인
          </PrimaryBtn>
          <PrimaryBtn
            onClick={handleSigninClick}
            $status="active"
            $shape="solid"
            $width="short"
            $height="low"
          >
            회원가입
          </PrimaryBtn>
        </nav>
      </S.HeaderBox>
    </S.HeaderLayout>
  );
}
