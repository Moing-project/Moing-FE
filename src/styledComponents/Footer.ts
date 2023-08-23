import { styled } from 'styled-components';

const FooterLayout = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const FooterContainer = styled.div`
  padding: 36px 32px 95px 32px;
`;

const ListBox = styled.ol`
  display: flex;
  gap: 20px;
  padding: 0px;
  font-weight: 600;
  margin-bottom: 50px;
`;

export { ListBox, FooterLayout, FooterContainer };
