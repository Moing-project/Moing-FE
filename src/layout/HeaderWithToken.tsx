import * as S from "../styledComponents/Header";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Chat, Search } from "../components/UsingIcons";
import { SearchBox } from "../styledComponents/commons/SearchInput";

export default function HeaderWithToken() {
  const navigate = useNavigate();

  return (
    <S.HeaderLayout>
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
          <S.HeaderProfile></S.HeaderProfile>
        </nav>
      </S.HeaderWithTokenBox>
    </S.HeaderLayout>
  );
}
