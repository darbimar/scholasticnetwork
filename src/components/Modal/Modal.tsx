import React, { FC, MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { hideForm } from '../../store/slices/modalSlice';
import './Modal.scss';

interface IProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Modal: FC<IProps> = ({ children, ...props }) => {
  return (
    <div className="modal" {...props}>
      {children}
    </div>
  );
};

export default Modal;
