import { styled } from 'styled-components';

export const MarginLayout = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  padding: 0 32px;
`;

export const Devider = styled.div`
  width: 368px;
  height: 0.5px;
  background: var(--gray-05);
`;

export const InputWithParagraph = styled.div`
  p:first-child {
    color: var(--main-font);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    margin-bottom: 8px;
  }
`;
