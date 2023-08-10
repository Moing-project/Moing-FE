import * as S from '../styledComponents/Buttons'
import { ReactNode} from 'react';
import { ButtonProps } from '../types/ButtonType';


export const PrimaryBtn = ({children, ...props} : ButtonProps) => {
    return (
        <S.CustomBtn {...props}>
            {children}
        </S.CustomBtn>
    )
}

export const NegativeBtn = ({children, $size, $bc} : ButtonProps) => {
    return (
        <S.CustomBtn $size='small' $bc='var(--gray-03'>
            {children}
        </S.CustomBtn>
    )
}