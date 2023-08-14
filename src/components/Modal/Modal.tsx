import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled/macro';
import './modal.css';
// 왜 안됨 ?
import Portal from './Portal';

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  selector?: string;
}

const Modal: React.FC<Props> = ({
  children,
  onClose,
  isOpen,
  selector = '#modal-root',
}) => {
  return (
    <CSSTransition in={isOpen} timeout={180} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <div>{children}</div>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};
export default Modal;
