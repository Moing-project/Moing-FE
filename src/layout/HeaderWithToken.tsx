import * as S from "../styledComponents/Header";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Chat, Search } from "../components/UsingIcons";
import { SearchBox } from "../styledComponents/commons/SearchInput";

export default function HeaderWithToken({
  hasToken,
  setHasToken,
  isRanding,
}: any) {
  const navigate = useNavigate();

  function handleDropdown() {}

  return (
    <S.HeaderLayout $isRanding={isRanding}>
      <S.HeaderWithTokenBox>
        <div>
          <Link to="">
            <Logo />
          </Link>
          <SearchBox>
            <Search />
            <input
              type="text"
              placeholder="팀, 프로젝트, 워크스페이스 전체 검색"
              style={{ width: "320px" }}
            />
          </SearchBox>
        </div>
        <nav>
          <button>
            <Alert />
          </button>
          <button>
            <Chat />
          </button>
          <S.HeaderProfile onClick={handleDropdown} />
          <ul className="dropdown">
            <li>내 워크스페이스로 이동</li>
            <li>마이페이지</li>
            <li
              onClick={() => {
                window.location.reload();
                localStorage.clear();
                setHasToken(false);
              }}
            >
              로그아웃
            </li>
          </ul>
        </nav>
      </S.HeaderWithTokenBox>
    </S.HeaderLayout>
  );
}
