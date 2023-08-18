import { useEffect, useState } from "react";
import * as S from "../../styledComponents/commons/Modals";
import { SubmitButton } from "../../styledComponents/commons/Buttons";
import { Devider } from "../../styledComponents/commons/commonStyle";
import { useNavigate } from "react-router-dom";
import SignInTimer from "./SignInTimer";
import PinInput from "react-pin-input";
import { useGetEmailCodeQuery } from "../../redux/modules/LoginAPI";

interface Props {
  email: string;
}

export default function SignInEmailModal({ email }: Props) {
  const [pin, setPin] = useState("");
  const [isValidPin, setIsValidPin] = useState(false);
  const [isEmailModalButtonActive, setIsEmailModalButtonActive] =
    useState(true);
  const [timerKey, setTimerKey] = useState(0); // To reset timer
  const navigate = useNavigate();

  let modalButtonStatus = isEmailModalButtonActive ? "active" : "disable";

  const onEmailVerificationSubmit = async (e: any) => {
    refetch(); // 데이터 요청
  };

  const { data, error, isLoading, refetch } = useGetEmailCodeQuery(
    {
      code: pin,
    },
    { skip: !isValidPin }
  );

  if (data?.msg === "create") navigate("/signin/done");

  const handlePinChange = (value: string) => {
    setPin(value);
    setIsValidPin(value.length === 6); // 6자리 핀인지 확인하여 유효성 검사
  };

  const handlePinComplete = (value: string) => {
    setIsValidPin(value.length === 6); // 핀 입력이 완료될 때 유효성 검사
  };

  const handleEmailResend = () => {
    console.log("재전송");
    setTimerKey((prevKey) => prevKey + 1); // Reset timer by changing the key
  };

  useEffect(() => {
    setIsEmailModalButtonActive(isValidPin);
  }, [isValidPin]);

  return (
    <S.ModalBody>
      <h2>{email}</h2>
      <p>입력하신 이메일로 인증번호가 전송되었습니다.</p>
      <section>
        <article>
          <PinInput
            focus // 자동 포커스
            length={6}
            onChange={handlePinChange}
            onComplete={handlePinComplete}
            inputStyle={{
              color: "var(--keyColor-main)",
              width: "20px",
              height: "20px",
              fontSize: "14px",
              fontWeight: "600",
              margin: "0",
              textAlign: "center",
              border: "none",
            }}
          />
          <SignInTimer initialTime={180} resetKey={timerKey} />
        </article>
        <Devider />
      </section>

      <div>
        <button onClick={handleEmailResend}>메일 재전송</button>
      </div>

      <SubmitButton
        type="submit"
        $shape="filled"
        $status={modalButtonStatus}
        $width="long"
        $height="medium"
        disabled={!isEmailModalButtonActive}
        onClick={onEmailVerificationSubmit}
      >
        확인
      </SubmitButton>
    </S.ModalBody>
  );
}
