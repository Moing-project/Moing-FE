import React from "react";
import { InputWithParagraph } from "../../../styledComponents/commons/commonStyle";
import { Inputs } from "../../../components/Inputs";

import { emailValidCheck } from "../../../utils/validators";
import { useDuplicateCheck } from "../../../hooks/useDuplicateCheck";

import { useAppSelector, useAppDispatch } from "../../../redux/config/hook";
import {
  useGetCheckEmailQuery,
  useGetCheckEmailTempMutation,
} from "../../../redux/modules/LoginAPI";
import {
  SignInRTKValue,
  signInChangeEmail,
  signInClearEmail,
} from "../../../redux/modules/SignInRTK";

export default function SignInEmailForm() {
  const { email } = useAppSelector(SignInRTKValue);
  const ___dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState<boolean>(true);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);
  const [duplication, { data: isDuplicated, isLoading }] =
    useGetCheckEmailTempMutation();
  //   const isDuplicated = false;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    ___dispatch(signInChangeEmail(value));
    setIsValid(emailValidCheck(value));
    setIsEmpty(value === "");
  };
  const clearEmail = () => {
    ___dispatch(signInClearEmail(null));
  };
  //   const CheckDuplication = () => {
  //     duplication({ email: email });
  //   };

  const onSigninSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  const isDuplicateds = useDuplicateCheck(
    useGetCheckEmailQuery,
    "email",
    email,
    isValid
  );

  React.useEffect(() => {
    console.log(typeof useGetCheckEmailTempMutation);
  }, []);

  return (
    <InputWithParagraph>
      <p>이메일</p>
      <Inputs
        value={email}
        handleValueChange={handleEmailChange}
        clearValue={clearEmail}
        isValidValue={isValid}
        isDuplicated={!!isDuplicated}
        isEmpty={isEmpty}
        onSubmit={onSigninSubmit}
        placeholder="이메일 주소 입력"
        validErrorMessage="이메일 주소 형식으로 입력해주세요."
        duplicateErrorMessage="중복된 이메일입니다."
      />
    </InputWithParagraph>
  );
}
