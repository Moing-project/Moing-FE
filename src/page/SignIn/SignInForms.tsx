import { useEffect, useState } from "react";
import * as S from "../../styledComponents/commons/Auth";
import * as C from "../../styledComponents/commons/commonStyle";
import { useCheckBox } from "../../hooks/useCheckBox";
import {
  useInput,
  usePasswordInput,
  usePasswordMatchInput,
} from "../../hooks/useValidInput";
import {
  useGetCheckEmailQuery,
  useGetCheckNicknameQuery,
  useSignInMutation,
} from "../../redux/modules/LoginAPI";
import { SubmitButton } from "../../styledComponents/commons/Buttons";
import {
  emailValidCheck,
  nicknameValidCheck,
  passwordValidCheck,
  matchPasswordValidCheck,
} from "../../utils/validators";
import { useDuplicateCheck } from "../../hooks/useDuplicateCheck";
import { Inputs, PasswordInput } from "../../components/Inputs";

import Modal from "../../components/Modal/Modal";
import SignInTerms from "./SignInTerms";
import SignInEmailModal from "./SignInEmailModal";
import SignInServiceModal from "./SignInServiceModal";

import { useAppSelector } from "../../redux/config/hook";
import { SignInRTKValue } from "../../redux/modules/SignInRTK";
import SignInEmailForm from "./components/SignInEmailForm";

export default function SignInForms() {
  // 모달 state
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState<boolean>(false);

  const handleEmailMadalOpen = () => setIsEmailModalOpen(true);
  const handleEmailMadalClose = () => setIsEmailModalOpen(false);
  const handleServiceModalOpen = () => setIsServiceModalOpen(true);
  const handleServiceModalClose = () => setIsServiceModalOpen(false);

  // 체크 상태
  const { checked: allAgreeCheck, setChecked: setAllAgreeCheck } =
    useCheckBox();
  const { checked: ageCheck, setChecked: setAgeCheck } = useCheckBox();
  const { checked: termsCheck, setChecked: setTermsCheck } = useCheckBox();
  const { checked: alarmCheck, setChecked: setAlarmCheck } = useCheckBox();
  const { email } = useAppSelector(SignInRTKValue);

  const {
    value: emails,
    handleChange: handleEmailChange,
    clearValue: clearEmail,
    isValid: isValidEmail,
    isEmpty: isEmailEmpty,
  } = useInput({ initialValue: "", validateFunc: emailValidCheck });

  const {
    value: nickname,
    handleChange: handleNicknameChange,
    clearValue: clearNickname,
    isValid: isValidNickname,
    isEmpty: isNicknameEmpty,
  } = useInput({ initialValue: "", validateFunc: nicknameValidCheck });

  const {
    password,
    handlePasswordChange,
    clearPassword,
    isPasswordEmpty,
    isValidPassword,
    showPassword,
    toggleShowPassword,
  } = usePasswordInput("", passwordValidCheck);

  const {
    passwordMatch,
    handlePasswordMatchChange,
    clearPasswordMatch,
    isMatchedPassword,
    isPasswordMatchEmpty,
    showPasswordMatch,
    toggleShowPasswordMatch,
  } = usePasswordMatchInput("", matchPasswordValidCheck, password);

  // 중복 확인
  // const isEmailDuplicated = useDuplicateCheck(
  //   useGetCheckEmailQuery,
  //   "email",
  //   email,
  //   isValidEmail
  // );

  const isNicknameDuplicated = useDuplicateCheck(
    useGetCheckNicknameQuery,
    "nickname",
    nickname,
    isValidNickname
  );

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
      isValidEmail &&
      nickname &&
      isValidNickname &&
      password &&
      isValidPassword &&
      passwordMatch &&
      isMatchedPassword
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [
    ageCheck,
    termsCheck,
    email,
    nickname,
    password,
    passwordMatch,
    isValidEmail,
    isValidNickname,
    isValidPassword,
    isMatchedPassword,
  ]);

  const [signIn, { isLoading }] = useSignInMutation();

  const onSigninSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading) {
      if (isValidEmail && isValidPassword && isValidNickname) {
        // 이메일 형식과 비밀번호 닉네임 모두 유효할 때
        console.log(email, password, nickname);
        const res = await signIn({
          email: email,
          password: password,
          nickname: nickname,
        });
        console.log(res);
        setIsEmailModalOpen(true);
      }
    }
  };
  useEffect(() => {
    console.log("email > ", email);
  }, [email]);

  // 버튼 상태 값
  let status = !isButtonActive ? "active" : "disable";

  return (
    <>
      <S.SignInFormBox onSubmit={onSigninSubmit}>
        {/* <C.InputWithParagraph>
          <p>이메일</p>
          <Inputs
            value={email}
            handleValueChange={handleEmailChange}
            clearValue={clearEmail}
            isValidValue={isValidEmail}
            isDuplicated={isEmailDuplicated}
            isEmpty={isEmailEmpty}
            onSubmit={onSigninSubmit}
            placeholder="이메일 주소 입력"
            validErrorMessage="이메일 주소 형식으로 입력해주세요."
            duplicateErrorMessage="중복된 이메일입니다."
          />
        </C.InputWithParagraph> */}
        <SignInEmailForm />
        <C.InputWithParagraph>
          <p>이름</p>
          <Inputs
            value={nickname}
            handleValueChange={handleNicknameChange}
            clearValue={clearNickname}
            isValidValue={isValidNickname}
            isDuplicated={isNicknameDuplicated}
            isEmpty={isNicknameEmpty}
            onSubmit={onSigninSubmit}
            placeholder="8자 이내 입력"
            validErrorMessage="8자 이하로 입력해주세요."
            duplicateErrorMessage="중복된 이름입니다."
          />
        </C.InputWithParagraph>
        <C.InputWithParagraph>
          <p>비밀번호</p>
          <PasswordInput
            value={password}
            handleValueChange={handlePasswordChange}
            clearValue={clearPassword}
            isValidValue={isValidPassword}
            isEmpty={isPasswordEmpty}
            onSubmit={onSigninSubmit}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
            validErrorMessage="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
          />
        </C.InputWithParagraph>
        <C.InputWithParagraph>
          <p>비밀번호 확인</p>
          <PasswordInput
            value={passwordMatch}
            handleValueChange={handlePasswordMatchChange}
            clearValue={clearPasswordMatch}
            isValidValue={isMatchedPassword}
            isEmpty={isPasswordMatchEmpty}
            onSubmit={onSigninSubmit}
            showPassword={showPasswordMatch}
            toggleShowPassword={toggleShowPasswordMatch}
            placeholder="비밀번호 재입력"
            validErrorMessage="위와 동일한 비밀번호를 입력해주세요."
          />
        </C.InputWithParagraph>
      </S.SignInFormBox>
      <SignInTerms
        allAgreeCheck={allAgreeCheck}
        handleAllAgreeChange={handleAllAgreeChange}
        ageCheck={ageCheck}
        setAgeCheck={setAgeCheck}
        termsCheck={termsCheck}
        setTermsCheck={setTermsCheck}
        alarmCheck={alarmCheck}
        setAlarmCheck={setAlarmCheck}
        handleEmailMadalOpen={handleEmailMadalOpen}
        handleServiceModalOpen={handleServiceModalOpen}
      />
      <SubmitButton
        type="submit"
        $shape="filled"
        $status={status}
        $width="long"
        $height="medium"
        disabled={!isButtonActive}
        onClick={onSigninSubmit}
      >
        다음
      </SubmitButton>

      {/* 모달 */}
      <Modal isOpen={isEmailModalOpen} onClose={handleEmailMadalClose}>
        <SignInEmailModal email={email} />
      </Modal>
      <Modal isOpen={isServiceModalOpen} onClose={handleServiceModalClose}>
        <SignInServiceModal onClose={handleServiceModalClose} />
      </Modal>
    </>
  );
}
