<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a972e5a (feature/modal)
import { Link } from 'react-router-dom';
import * as S from '../../styledComponents/Auth';
import * as I from '../../components/UsingIcons';
import { useCheckBox } from '../../hooks/useCheckBox';
import { useInput } from '../../hooks/useInput';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import * as S from "../../styledComponents/Auth";
import * as I from "../../components/UsingIcons";
import { useCheckBox } from "../../hooks/useCheckBox";
import { useInput } from "../../hooks/useInput";
import { useEffect, useState } from "react";
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
>>>>>>> a972e5a (feature/modal)

export default function SignIn() {
  // 체크 상태
  const { checked: allAgreeCheck, setChecked: setAllAgreeCheck } =
    useCheckBox();
  const { checked: ageCheck, setChecked: setAgeCheck } = useCheckBox();
  const { checked: termsCheck, setChecked: setTermsCheck } = useCheckBox();
  const { checked: alarmCheck, setChecked: setAlarmCheck } = useCheckBox();

  // 인풋 상태
  const {
    value: email,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    clearValue: clearEmail,
<<<<<<< HEAD
<<<<<<< HEAD
  } = useInput('');
=======
  } = useInput("");
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
  } = useInput('');
>>>>>>> a972e5a (feature/modal)

  const {
    value: nickname,
    handleChange: handleNicknameChange,
    handleFocus: handleNicknameFocus,
    clearValue: clearNickname,
<<<<<<< HEAD
<<<<<<< HEAD
  } = useInput('');
=======
  } = useInput("");
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
  } = useInput('');
>>>>>>> a972e5a (feature/modal)

  const {
    value: password,
    handleChange: handlePasswordChange,
    handleFocus: handlePasswordFocus,
    clearValue: clearPassword,
<<<<<<< HEAD
<<<<<<< HEAD
  } = useInput('');
=======
  } = useInput("");
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
  } = useInput('');
>>>>>>> a972e5a (feature/modal)

  const {
    value: passwordMatch,
    handleChange: handlePasswordMatchChange,
    handleFocus: handlePasswordMatchFocus,
    clearValue: clearPasswordMatch,
<<<<<<< HEAD
<<<<<<< HEAD
  } = useInput('');
=======
  } = useInput("");
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
  } = useInput('');
>>>>>>> a972e5a (feature/modal)

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [shwoPasswordMatch, setShowPasswordMatch] = useState<boolean>(false);

  // 비밀번호 숨기기 보이기
  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  const toggleShowPasswordMatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPasswordMatch(!shwoPasswordMatch);
    e.preventDefault();
  };

  // 유효성 검사 함수
  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidNickname = (nickname: string) => {
    return nickname.trim().length > 8;
  };

  const isPasswordValid = (password: string) => {
    // 영문 대소문자, 숫자, 특수문자를 포함한 정규표현식
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const isPasswordMatch = (passwordMatch: string) => {
    return passwordMatch === password;
  };

  // 모두 체크 함수
  const handleAllAgreeChange = () => {
    const newAllAgreeState = !allAgreeCheck;
    setAllAgreeCheck(newAllAgreeState);
    setAgeCheck(newAllAgreeState);
    setTermsCheck(newAllAgreeState);
    setAlarmCheck(newAllAgreeState);
  };

  // 하위 항목 중 하나라도 false인 경우 전체 동의도 false, 모두 동의면 전체 동의도 true
  useEffect(() => {
    if (!ageCheck || !termsCheck || !alarmCheck) {
      setAllAgreeCheck(false);
    } else if (ageCheck && termsCheck && alarmCheck) {
      setAllAgreeCheck(true);
    }
  }, [setAllAgreeCheck, ageCheck, termsCheck, alarmCheck]);

  // Submit 버튼
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    // 모든 필수 체크박스가 체크되고, 모든 input 필드가 유효한 경우에만 버튼을 활성화
    if (
      ageCheck &&
      termsCheck &&
      email &&
      isValidEmail(email) &&
      nickname &&
      !isValidNickname(nickname) &&
      password &&
      isPasswordValid(password) &&
      passwordMatch &&
      isPasswordMatch(passwordMatch)
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [ageCheck, termsCheck, email, nickname, password, passwordMatch]);

  // 버튼 상태 값
  let status = !isButtonActive ? "active" : "disable";

  // const [login, { isLoading }] = usePostLoginMutation();

  // const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!isLoading) {
  //     if (isValidEmail(email) && password) {
  //       // 이메일 형식과 비밀번호 모두 유효할 때
  //       console.log(email, password);
  //       const res = await login({
  //         username: email,
  //         password: password,
  //       });
  //       console.log(res);
  //     }
  //   }
  // };

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
      <S.SignInFormBox>
        <div>
          <p>이메일</p>
          <S.InputBox
            justify="space-between"
            align="center"
            $isValidValue={isValidEmail(email)}
<<<<<<< HEAD
<<<<<<< HEAD
            $isEmpty={email === ''}
=======
            $isEmpty={email === ""}
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
            $isEmpty={email === ''}
>>>>>>> a972e5a (feature/modal)
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              placeholder="이메일 주소 입력"
            />
            {email && (
              <button onClick={clearEmail}>
                <I.Remove />
              </button>
            )}
          </S.InputBox>
          {email && !isValidEmail(email) && (
            <S.CautionText>이메일 주소 형식으로 입력해주세요.</S.CautionText>
          )}
        </div>
        <div>
          <p>이름</p>
          <S.InputBox
            justify="space-between"
            align="center"
            $isValidValue={!isValidNickname(nickname)}
<<<<<<< HEAD
<<<<<<< HEAD
            $isEmpty={nickname === ''}
=======
            $isEmpty={nickname === ""}
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
            $isEmpty={nickname === ''}
>>>>>>> a972e5a (feature/modal)
          >
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              onFocus={handleNicknameFocus}
              placeholder="8자 이내 입력"
            />
            {nickname && (
              <button onClick={clearNickname}>
                <I.Remove />
              </button>
            )}
          </S.InputBox>
          {nickname && isValidNickname(nickname) && (
            <S.CautionText>8자 이내로 입력 (+ 중복검사)</S.CautionText>
          )}
        </div>
        <div>
          <p>비밀번호</p>
          <S.InputBox
            justify="space-between"
            align="center"
            $isValidValue={isPasswordValid(password)}
<<<<<<< HEAD
<<<<<<< HEAD
            $isEmpty={password === ''}
          >
            <input
              type={showPassword ? 'text' : 'password'}
=======
            $isEmpty={password === ""}
          >
            <input
              type={showPassword ? "text" : "password"}
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
            $isEmpty={password === ''}
          >
            <input
              type={showPassword ? 'text' : 'password'}
>>>>>>> a972e5a (feature/modal)
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
            />
            <div>
              {password && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                <button onClick={clearPassword}>
                  <I.Remove />
                </button>
              )}
              <button onClick={toggleShowPassword}>
                {showPassword ? <I.Hide /> : <I.Visible />}
              </button>
            </div>
          </S.InputBox>
          {password && !isPasswordValid(password) && (
            <S.CautionText>
              영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
            </S.CautionText>
          )}
        </div>
        <div>
          <p>비밀번호 확인</p>
          <S.InputBox
            justify="space-between"
            align="center"
            $isValidValue={isPasswordMatch(passwordMatch)}
<<<<<<< HEAD
<<<<<<< HEAD
            $isEmpty={passwordMatch === ''}
          >
            <input
              type={shwoPasswordMatch ? 'text' : 'password'}
=======
            $isEmpty={passwordMatch === ""}
          >
            <input
              type={shwoPasswordMatch ? "text" : "password"}
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
            $isEmpty={passwordMatch === ''}
          >
            <input
              type={shwoPasswordMatch ? 'text' : 'password'}
>>>>>>> a972e5a (feature/modal)
              value={passwordMatch}
              onChange={handlePasswordMatchChange}
              onFocus={handlePasswordMatchFocus}
              placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
            />
            <div>
              {passwordMatch && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                <button onClick={clearPasswordMatch}>
                  <I.Remove />
                </button>
              )}
              <button onClick={toggleShowPasswordMatch}>
                {shwoPasswordMatch ? <I.Hide /> : <I.Visible />}
              </button>
            </div>
          </S.InputBox>
          {passwordMatch && !isPasswordMatch(passwordMatch) && (
            <S.CautionText>위와 동일한 비밀번호를 입력해주세요.</S.CautionText>
          )}
        </div>
      </S.SignInFormBox>
      <S.SignInTermsBox>
        <p>
          <input
            type="checkbox"
            id="allAgreeCheck"
            checked={allAgreeCheck}
            onChange={handleAllAgreeChange}
          />
          <label htmlFor="allAgreeCheck">
            {allAgreeCheck ? <I.Checked /> : <I.Unchecked />}
            전체 사항에 동의합니다.
          </label>
        </p>
        <S.Devider />
        <div>
          <p>
            <input
              type="checkbox"
              id="ageCheck"
              checked={ageCheck} // 체크 여부에 따라 상태 반영
              onChange={() => setAgeCheck(!ageCheck)} // 체크 상태 변경
            />
            <label htmlFor="ageCheck">
              {ageCheck ? <I.Checked /> : <I.Unchecked />}
              <span>(필수)</span> 만 14세 이상입니다.
            </label>
          </p>
          <p>
            <input
              type="checkbox"
              id="termsCheck"
              checked={termsCheck} // 체크 여부에 따라 상태 반영
              onChange={() => setTermsCheck(!termsCheck)} // 체크 상태 변경
            />
            <label htmlFor="termsCheck">
              {termsCheck ? <I.Checked /> : <I.Unchecked />}
              <span>(필수) </span>
              <Link to="">서비스 이용약관</Link>,&nbsp;
              <Link to="">개인정보 처리약관</Link>에 동의합니다.
            </label>
          </p>
          <p>
            <input
              type="checkbox"
              id="alarmCheck"
              checked={ageCheck} // 체크 여부에 따라 상태 반영
              onChange={() => setAlarmCheck(!alarmCheck)} // 체크 상태 변경
            />
            <label htmlFor="alarmCheck">
              {alarmCheck ? <I.Checked /> : <I.Unchecked />}
              (선택) <Link to="">혜택 알림 수신</Link>에 동의합니다.
            </label>
          </p>
        </div>
      </S.SignInTermsBox>
      {(!ageCheck || !termsCheck) && (
        <S.CautionText>필수사항에 동의해주세요.</S.CautionText>
      )}
      <S.SubmitButton
        type="submit"
        $shape="filled"
        $status={status}
        $width="long"
        $height="medium"
        disabled={!isButtonActive}
      >
        다음
      </S.SubmitButton>
      <nav>
        이미 가입하셨나요? <Link to="/login">로그인</Link>
      </nav>
    </S.SignInLayout>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a972e5a (feature/modal)

// background-color: #ffffff;
// border: 1px none;
// box-shadow: var(--);
// height: 180px;
// position: relative;
// width: 310px;

// function App() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   //모달을 열고 닫기 위한 상태를 선언하기위해

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);
//   //모달 닫는부분

//   // 실제 모달이 부분 ,내용
//   return (
//     <Container className="모달">
//       <Button onClick={handleOpen}>OPEN</Button>
//       {/* 버튼은 모달을 여는 역할 */}
//       <Modal isOpen={isOpen} onClose={handleClose}>
//         <ModalBody>
//           <h2>
//             ll894564@naver.com
//             <p>입력하신 이메일로 인증번호가 전송되었습니다</p>
//           </h2>
//           <p>인증번호를 입력해주세요</p>
//           <input type="text" placeholder="인증번호를 입력해주세요"></input>
//           <Button onClick={handleClose}>확인</Button>
//         </ModalBody>
//       </Modal>
//     </Container>
//   );
// }
<<<<<<< HEAD
=======
>>>>>>> 5797968 ([style] 병합 후 구조 수정)
=======
>>>>>>> a972e5a (feature/modal)
