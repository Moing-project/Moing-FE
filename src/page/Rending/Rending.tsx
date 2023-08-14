import RendingSection1 from './RendingSection1';
import RendingSection2 from './RendingSection2';
import RendingSection3 from './RendingSection3';
import styled from 'styled-components';
export default function Rending() {
  // 각 세션별로 보여주기/ pr 하기전 지우기
  return (
    <div>
      {/* <TestLayout>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
        <p>약관 테스트입니다 이것저것 넣어보자</p>
      </TestLayout> */}
      <RendingSection1 />
      <RendingSection2 />
      <RendingSection3 />
      <section></section>
    </div>
  );
}

const TestLayout = styled.div`
  padding: 15px;
  height: 400px;
  overflow-y: scroll;
`;
