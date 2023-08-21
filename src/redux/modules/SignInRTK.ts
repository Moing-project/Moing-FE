import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingInData } from "../types/LoginType";
import { RootState } from "../config/configStore";

type SignInFormType = SingInData & {
  matchPassword: string;
};

const initialState: SignInFormType = {
  email: "",
  nickname: "",
  password: "",
  matchPassword: "",
};

const SignInRTK = createSlice({
  name: "SignInRTK",
  initialState,
  reducers: {
    signInInit(state, action: PayloadAction<SignInFormType>) {
      return (state = action.payload);
    },
    /// 이메일 관련
    signInChangeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      return state;
    },
    signInClearEmail(state, action: PayloadAction<null>) {
      state.email = "";
      return state;
    },

    signInChangeNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
      return state;
    },
    signInChangePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      return state;
    },
    signInChangeMatchPassword(state, action: PayloadAction<string>) {
      state.matchPassword = action.payload;
      return state;
    },
    signInDataClear(state, action: PayloadAction<null>) {
      return (state = initialState);
    },
  },
});
export const {
  signInInit,
  signInChangeEmail,
  signInClearEmail,
  signInChangeNickname,
  signInChangePassword,
  signInChangeMatchPassword,
  signInDataClear,
} = SignInRTK.actions;

export const SignInRTKValue = (state: RootState) => state[SignInRTK.name];
export default SignInRTK;
