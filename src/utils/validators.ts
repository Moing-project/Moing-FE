const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const isValidEmail = (email: string) => {
  const trimmedEmail = email.trim();
  if (trimmedEmail === "") {
    return true;
  }
  return emailPattern.test(trimmedEmail);
};

export const isValidNickname = (nickname: string) => {
  const trimmedNickname = nickname.trim();
  if (trimmedNickname === "") {
    return true;
  }
  return trimmedNickname.length >= 1 && trimmedNickname.length < 9;
};

export const isValidPassword = (password: string) => {
  const trimmedPassword = password.trim();
  if (trimmedPassword === "") {
    return true;
  }
  return passwordPattern.test(trimmedPassword);
};

// 로그인 페이지 비밀번호 : 1자리 이상
export const isValidLoginPassword = (password: string) => {
  const trimmedPassword = password.trim();
  if (trimmedPassword === "") {
    return true;
  }
  return trimmedPassword.length >= 1; // 1자리 이상
};
