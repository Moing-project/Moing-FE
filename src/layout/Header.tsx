import { PrimaryBtn } from "../components/Buttons";
import * as S from "../styledComponents/Header";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSigninClick = () => {
    navigate("/signin");
  };

  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <Link to="">
          <Logo />
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
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
        </div>
      </S.HeaderBox>
    </S.HeaderLayout>
  );
}
