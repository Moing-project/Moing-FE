import { ReactNode } from "react";

export type ButtonProps = {
  props?: any;
  children?: ReactNode;
  onClick?: () => void;
  $height?: string;
  $width?: string;
  $status?: string;
  $shape?: string;
};
