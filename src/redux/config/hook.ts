import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./configStore";

export const checkAccess: (message: string) => boolean = (message: string) => {
  if (message.substring(0, 6).toLowerCase() === "access") return true;
  return false;
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
