import * as S from "../styledComponents/Buttons";
import { ButtonProps } from "../styledComponents/types/ButtonType";

export const PrimaryBtn = ({ children, ...props }: ButtonProps) => {
  return (
    <S.CustomBtn {...props} onClick={props.onClick}>
      {children}
    </S.CustomBtn>
  );
};

// export const NegativeBtn = ({ children, $size, $bc }: ButtonProps) => {
//   return (
//     <S.CustomBtn $size="small" $bc="var(--gray-03">
//       {children}
//     </S.CustomBtn>
//   );
// };
