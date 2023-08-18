import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SignInFormBox } from "../../styledComponents/commons/Auth";
import { InputWithParagraph } from "../../styledComponents/commons/commonStyle";
import { CautionText, InputBox } from "../../styledComponents/commons/Inputs";
import * as I from "../../components/UsingIcons";
import { useGetCheckEmailQuery } from "../../redux/modules/LoginAPI";
import { useState } from "react";

const schema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "유효한 이메일 형식이어야 합니다."
    )
    .required("필수 입력 사항입니다."),
  nickname: Yup.string()
    .min(2, "최소 2자 이상이어야 합니다.")
    .max(8, "최대 8자까지 가능합니다.")
    .required("필수 입력 사항입니다."),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "영문, 숫자, 기호를 포함하여 8자 이상이어야 합니다."
    )
    .required("필수 입력 사항입니다."),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 입력 사항입니다."),
});

type FormData = Yup.InferType<typeof schema>;

export default function FormPrac() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = ({
    email,
    nickname,
    password,
  }) => {
    console.log(email, nickname, password);
  };

  const emailValue = watch("email");

  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [skip, setSkip] = useState(true);

  const { data, isLoading, isSuccess } = useGetCheckEmailQuery(
    { email: emailValue },
    { skip }
  );

  const handleEmailBlur = () => {
    if (!errors.email && emailValue !== "" && emailValue !== undefined)
      setSkip(false);
    else {
      setSkip(true);
    }
  };

  const handleEmailFocus = () => {
    setIsEmailDuplicated(false);
  };

  useEffect(() => {
    if (
      !!errors.email ||
      emailValue === "" ||
      emailValue === undefined ||
      !dirtyFields.email ||
      isLoading
    ) {
      setIsEmailDuplicated(false);
      setSkip(true);
      return;
    }

    setIsEmailDuplicated(data?.msg !== "success");
  }, [emailValue, errors.email, dirtyFields.email, data, isLoading, isSuccess]);

  return (
    <SignInFormBox onSubmit={handleSubmit(onSubmit)}>
      <InputWithParagraph>
        <p>이메일</p>
        <InputBox
          $justify="space-between"
          $align="center"
          $isValidValue={!!errors.email}
          $isEmpty={emailValue === ""}
        >
          <input
            {...register("email", {
              onBlur: handleEmailBlur,
            })}
            onFocus={handleEmailFocus}
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          {dirtyFields.email && (
            <button type="button" onClick={() => resetField("email")}>
              <I.Remove />
            </button>
          )}
        </InputBox>
        {errors.email && <CautionText>{errors.email.message}</CautionText>}
        {isEmailDuplicated && <CautionText>겹침</CautionText>}
      </InputWithParagraph>
      <div>
        <label>닉네임</label>
        <input {...register("nickname")} type="text" placeholder="nickname" />
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </div>
      <div>
        <label>비밀번호</label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input
          {...register("passwordConfirm")}
          type="password"
          placeholder="password"
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </div>
      <button type="submit">가입하기</button>
    </SignInFormBox>
  );
}
