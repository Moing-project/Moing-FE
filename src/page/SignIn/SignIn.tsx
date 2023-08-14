import { Link } from "react-router-dom";
import * as S from "../../styledComponents/Auth";
import * as C from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";
import { useCheckBox } from "../../hooks/useCheckBox";
import { useInput } from "../../hooks/useInput";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import {
  useGetCheckEmailQuery,
  useGetCheckNicknameQuery,
} from "../../redux/modules/LoginAPI";
import SignInModal from "./SignInModal";

export default function SignIn() {
  // 모달
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  //모달을 열고 닫기 위한 상태를 선언하기위해

  const handleOpen = () => setIsOpen(true);
  const handleOpen2 = () => setIsOpen2(true);
  const handleClose = () => setIsOpen(false);
  const handleClose2 = () => setIsOpen2(false);

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
    clearValue: clearEmail,
  } = useInput("");

  const {
    value: nickname,
    handleChange: handleNicknameChange,
    clearValue: clearNickname,
  } = useInput("");

  const {
    value: password,
    handleChange: handlePasswordChange,
    clearValue: clearPassword,
  } = useInput("");

  const {
    value: passwordMatch,
    handleChange: handlePasswordMatchChange,
    clearValue: clearPasswordMatch,
  } = useInput("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordMatch, setShowPasswordMatch] = useState<boolean>(false);

  // 비밀번호 숨기기 보이기
  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  const toggleShowPasswordMatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPasswordMatch(!showPasswordMatch);
    e.preventDefault();
  };

  // 유효성 검사 함수
  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
  };

  const isValidNickname = (nickname: string) => {
    const trimmedNickname = nickname.trim();
    return trimmedNickname.length >= 1 && trimmedNickname.length < 9;
  };

  const isPasswordValid = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const isPasswordMatch = (passwordMatch: string) => {
    return passwordMatch === password;
  };

  // 중복 확인 함수
  const [isEmailDuplicated, setIsEmailDuplicated] = useState<boolean>(false);
  const [isNicknameDuplicated, setIsNicknameDuplicated] =
    useState<boolean>(false);

  const { data: UserEmailData, isLoading: UserEmailDataLoading } =
    useGetCheckEmailQuery(
      { email: email },
      {
        skip: !isValidEmail(email), // 이메일 유효할 때만 요청 보내기
      }
    );

  const { data: UserNicknameData, isLoading: UserNicknameDataLoading } =
    useGetCheckNicknameQuery(
      { nickname: nickname },
      {
        skip: !isValidNickname(nickname), // 닉네임 유효할 때만 요청 보내기
      }
    );

  // 모두 체크 함수
  const handleAllAgreeChange = () => {
    const newAllAgreeState = !allAgreeCheck;
    setAllAgreeCheck(newAllAgreeState);
    setAgeCheck(newAllAgreeState);
    setTermsCheck(newAllAgreeState);
    setAlarmCheck(newAllAgreeState);
  };

  ///// ## 중복 검사 결과 표시
  useEffect(() => {
    // 요청 중이거나, 이메일 비어있거나, 이메일 유효하지 않을 때 return
    if (UserEmailDataLoading || email === "" || !isValidEmail(email)) {
      setIsEmailDuplicated(false);
      return;
    }
    setIsEmailDuplicated(UserEmailData?.msg !== "success");
  }, [email, UserEmailDataLoading, UserEmailData]);

  useEffect(() => {
    // 요청 중이거나, 이름 비어있거나, 이름 유효하지 않을 때 return
    if (
      UserNicknameDataLoading ||
      nickname === "" ||
      !isValidNickname(nickname)
    ) {
      setIsNicknameDuplicated(false);
      return;
    }
    setIsNicknameDuplicated(UserNicknameData?.msg !== "success");
  }, [nickname, UserNicknameDataLoading, UserNicknameData]);

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
      isValidNickname(nickname) &&
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

  return (
    <>
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
        <S.SignInFormBox>
          <C.InputWithP>
            <p>이메일</p>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={isValidEmail(email)}
              $isDuplicated={isEmailDuplicated}
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일 주소 입력"
              />
              {email && (
                <button onClick={clearEmail} tabIndex={-1}>
                  <I.Remove />
                </button>
              )}
            </C.InputBox>
            {email && !isValidEmail(email) && (
              <C.CautionText>이메일 주소 형식으로 입력해주세요.</C.CautionText>
            )}
            {isEmailDuplicated && (
              <C.CautionText>이미 사용 중인 이메일입니다.</C.CautionText>
            )}
          </C.InputWithP>
          <C.InputWithP>
            <p>이름</p>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={isValidNickname(nickname)}
            >
              <input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="8자 이내 입력"
              />
              {nickname && (
                <button onClick={clearNickname} tabIndex={-1}>
                  <I.Remove />
                </button>
              )}
            </C.InputBox>
            {nickname && !isValidNickname(nickname) && (
              <C.CautionText>8자 이내로 입력해주세요.</C.CautionText>
            )}
            {isNicknameDuplicated && (
              <C.CautionText>이미 사용 중인 닉네임입니다.</C.CautionText>
            )}
          </C.InputWithP>
          <C.InputWithP>
            <p>비밀번호</p>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={isPasswordValid(password)}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
              />
              <div>
                {password && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                  <button onClick={clearPassword} tabIndex={-1}>
                    <I.Remove />
                  </button>
                )}
                <button onClick={toggleShowPassword} tabIndex={-1}>
                  {showPassword ? <I.Hide /> : <I.Visible />}
                </button>
              </div>
            </C.InputBox>
            {password && !isPasswordValid(password) && (
              <C.CautionText>
                영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
              </C.CautionText>
            )}
          </C.InputWithP>
          <C.InputWithP>
            <p>비밀번호 확인</p>
            <C.InputBox
              $justify="space-between"
              $align="center"
              $isValidValue={isPasswordMatch(passwordMatch)}
            >
              <input
                type={showPasswordMatch ? "text" : "password"}
                value={passwordMatch}
                onChange={handlePasswordMatchChange}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
              />
              <div>
                {passwordMatch && ( // 비밀번호가 입력된 경우에만 X 버튼 표시
                  <button onClick={clearPasswordMatch} tabIndex={-1}>
                    <I.Remove />
                  </button>
                )}
                <button onClick={toggleShowPasswordMatch} tabIndex={-1}>
                  {showPasswordMatch ? <I.Hide /> : <I.Visible />}
                </button>
              </div>
            </C.InputBox>
            {passwordMatch && !isPasswordMatch(passwordMatch) && (
              <C.CautionText>
                위와 동일한 비밀번호를 입력해주세요.
              </C.CautionText>
            )}
          </C.InputWithP>
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
          <C.Devider />
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
                <Link to="" onClick={handleOpen2}>
                  서비스 이용약관
                </Link>
                , {/* 서비스 이용약관 모달 */}
                <Link to="" onClick={handleOpen}>
                  개인정보 처리약관
                </Link>
                에 동의합니다.
              </label>
              {/* 모달부분을 이제 서비스약관모달로 바꾸자 */}
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
          <C.CautionText>필수사항에 동의해주세요.</C.CautionText>
        )}
        <C.SubmitButton
          type="submit"
          $shape="filled"
          $status={status}
          $width="long"
          $height="medium"
          disabled={!isButtonActive}
          onClick={handleOpen}
        >
          다음
        </C.SubmitButton>
        <nav>
          이미 가입하셨나요? <Link to="/login">로그인</Link>
        </nav>
      </S.SignInLayout>

      {/* 모달 */}
      <Modal isOpen={isOpen2} onClose={handleClose2}>
        <SignInModal onClose={handleClose2} />
      </Modal>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <S.ModalBody>
          <h2>ll894564@naver.com</h2>
          <p>입력하신 이메일로 인증번호가 전송되었습니다.</p>
          <section>
            <div>
              <input type="text" placeholder="인증번호를 입력해주세요."></input>
              <h3>3:00</h3>
            </div>
            <C.Devider />
          </section>

          <h4>메일 재전송</h4>
          <C.SubmitButton
            type="submit"
            $shape="filled"
            $status={status}
            $width="long"
            $height="medium"
            disabled={!isButtonActive}
            onClick={handleClose}
          >
            확인
          </C.SubmitButton>
        </S.ModalBody>
      </Modal>
    </>
  );
}
