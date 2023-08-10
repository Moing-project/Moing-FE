import { styled, css } from "styled-components";
import { ButtonProps } from "../types/ButtonType";


const CustomBtn = styled.button<ButtonProps>`
    ${({$size}) => {
        switch ($size) {
            case 'small':
            return css`
                width : 94px;
                height : 32px;
                padding : 6px 24px;
                font-size : 12px;
            `;
            case 'medium':
                return css`
                width : 150px;
                height : 18px;
                padding : 12px;
                font-size : 14px;
                `;
            case 'large':
                return css`
                    width : 167px;
                    height : 42px;
                    padding : 14px 40px;
                    font-size : 16px;
                    display : inline-flex;
                    justify-content : center;
                    align-items : center;
                    gap : 8px;
                    white-space : nowrap;
                `;
            case 'long':
                return css`
                width : 288px;
                height : 48px;
                padding : 14px 10px;
                font-size : 16px;
                font-weight : 600;
                `
            default :
            return css`
                width : 92px;
                height : 32px;
                padding : 6px 24px;
            `;
        }
    }}
    background-color : ${({$bc}) => $bc};
    color : ${({$fontcolor}) => $fontcolor};
    border-radius : 8px;
    border : 1px solid ${({$bdc}) => $bdc};
    font-weight : 600;
    cursor : pointer;
`
export {CustomBtn}