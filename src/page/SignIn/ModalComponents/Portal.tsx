import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  // children?: React.AllHTMLAttributes;
  children?: React.ReactNode;
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);
  //selector 의 props를 받아서 selector가 있을 경우

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};
//12번 줄
//rootElement가 있을때  createPortal로 props로 전달받은 children을 rootElement에 랜더링 시켜주고
// :rootElement가 없으면 그대로 children을 리턴한다

//querySelector로 조회한 rootElement을 props로 전달받은 children이 rootElement에 랜더링됨
export default Portal;
