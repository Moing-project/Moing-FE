import React from "react";
import * as S from "../../styledComponents/Auth";
import LoginForms from "./LoginForms";
import { ReactComponent as PageIntro } from "../../assets/images/img.svg";

const SignIn: React.FC = () => {
  return (
    <S.LoginLayout $justify="center" $gap="144px">
      <S.LoginIntroBox $direction="column" $gap="48px">
        <S.LoginIntroText $direction="column" $gap="12px">
          <h1>
            모집과 협업을 한번에! <br />
            모두 있는 모임 공간
            <span> 모잉</span>
          </h1>
          <p>
            내가 원하는 프로젝트를 바로 찾아
            <br />
            바로 협업을 펼쳐보아요!
          </p>
        </S.LoginIntroText>
        <figure>
          <PageIntro />
        </figure>
      </S.LoginIntroBox>
      <LoginForms />
    </S.LoginLayout>
  );
};

export default SignIn;

// import React, { useState } from "react";
// import { usePostLoginMutation } from "../redux/modules/LoginAPI";
// import { useNavigate } from "react-router-dom";
// import { type } from "./../config/BaseRequestType";

// export default function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [login, { isLoading }] = usePostLoginMutation();

//   const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };

//   const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!isLoading) {
//       console.log(username, password);
//       const res = await login({
//         username: username,
//         password: password,
//       });
//       console.log(res);
//     }
//   };

//   return (
//     <form onSubmit={onLoginSubmit}>
//       Username <input onChange={changeUsername} value={username} />
//       <br />
//       Password <input onChange={changePassword} value={password} />
//       <br />
//       <button>버튼</button>
//       <br />
//       <button onClick={() => navigate("/")}>Home</button>
//     </form>
//   );
// }
