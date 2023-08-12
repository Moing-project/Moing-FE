import { useInput } from "../../hooks/useInput";
import * as S from "../../styledComponents/Projects";
import * as C from "../../styledComponents/commonStyle";
import * as I from "../../components/UsingIcons";

export default function ProjectsMake() {
  // 인풋 상태
  const {
    value: name,
    handleChange: handleNameChange,
    handleFocus: handleNameFocus,
    clearValue: clearName,
  } = useInput("");

  // 인풋 상태
  // const {
  //   value: number,
  //   handleChange: handleNumberChange,
  //   handleFocus: handleNumberFocus,
  // } = useInput("");

  // 유효성 검사 함수
  const isValidName = (name: string) => {
    return name.trim().length > 20;
  };

  // const isValidNumber = (number: number) => {
  //   return name.trim().length > 20;
  // };

  return (
    <S.ProjectsMekeLayout direction="column">
      <div>
        <h1>프로젝트 생성하기</h1>
        <p>협업하고 싶은 프로젝트를 모잉과 함께 간단히 생성해보아요!</p>
      </div>
      <S.ProjectsMekeFormBox>
        {/* <C.InputWithP>
          <p>이메일</p>
          <C.InputBox
            justify="space-between"
            align="center"
            $isValidValue={isValidEmail(email)}
            $isEmpty={email === ""}
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
          </C.InputBox>
          {email && !isValidEmail(email) && (
            <C.CautionText>이메일 주소 형식으로 입력해주세요.</C.CautionText>
          )}
        </C.InputWithP> */}
        <S.ProjectsMekeFormBoxRow gap="16px">
          <C.InputWithP>
            <p>프로젝트 이름</p>
            <C.InputBox
              justify="space-between"
              align="center"
              $isValidValue={!isValidName(name)}
              $isEmpty={name === ""}
            >
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                onFocus={handleNameFocus}
                // onBlur={handleNameBlur}
                placeholder="20자 이내로 입력해주세요"
              />
              {name && (
                <button onClick={clearName}>
                  <I.Remove />
                </button>
              )}
            </C.InputBox>
            {name && isValidName(name) && (
              <C.CautionText>20자 이내로 입력해주세요</C.CautionText>
            )}
          </C.InputWithP>
          <C.InputWithP>
            <p>이메일</p>
            <C.InputBox justify="space-between" align="center">
              <input type="email" placeholder="이메일 주소 입력" />
              {/* {email && (
              <button onClick={clearEmail}>
                <I.Remove />
              </button>
            )} */}
            </C.InputBox>
            {/* {email && !isValidEmail(email) && (
            <C.CautionText>이메일 주소 형식으로 입력해주세요.</C.CautionText>
          )} */}
          </C.InputWithP>
        </S.ProjectsMekeFormBoxRow>
        <S.ProjectsMekeFormBoxRow gap="16px">
          <C.InputWithP>
            <p>모집 인원</p>
            {/* <C.InputBox
              justify="space-between"
              align="center"
              // $isValidValue={!isValidNumber(number)}
              $isEmpty={number === null}
            >
              <input
                type="number"
                value={number}
                onChange={handleNumberChange}
                onFocus={handleNumberFocus}
                min="1"
                max="10"
                placeholder="직접 입력해주세요 (최대 10명까지 가능)"
              />
            </C.InputBox> */}
            {name && isValidName(name) && (
              <C.CautionText>20자 이내로 입력해주세요</C.CautionText>
            )}
          </C.InputWithP>
          <C.InputWithP>
            <p>이메일</p>
            <C.InputBox justify="space-between" align="center">
              <input type="email" placeholder="이메일 주소 입력" />
              {/* {email && (
              <button onClick={clearEmail}>
                <I.Remove />
              </button>
            )} */}
            </C.InputBox>
            {/* {email && !isValidEmail(email) && (
            <C.CautionText>이메일 주소 형식으로 입력해주세요.</C.CautionText>
          )} */}
          </C.InputWithP>
        </S.ProjectsMekeFormBoxRow>
      </S.ProjectsMekeFormBox>
      <S.ProjectsMekeDevider />
    </S.ProjectsMekeLayout>
  );
}
