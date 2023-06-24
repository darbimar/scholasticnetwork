import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/slices/itemsSlice';
import { hideDeleteModal } from '../../store/slices/modalSlice';
import Modal from '../Modal/Modal';
import './ConfirmModal.scss';

type ConfirmModalProps = {
  id: string | undefined;
};

const ConfirmModal: FC<ConfirmModalProps> = ({ id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteItem(id));
    dispatch(hideDeleteModal());
  };

  const handleClose = () => {
    dispatch(hideDeleteModal());
    document.body.style.overflow = 'scroll';
  };

  return (
    <Modal onClick={handleClose}>
      <div className="confirm" onClick={(e) => e.stopPropagation()}>
        <div className="confirm__title">Are you sure you want to delete this item?</div>
        <div className="confirm__subtitle">You will not be able to restore it.</div>
        <div className="confirm__buttons">
          <button
            className="button button--white"
            type="button"
            onClick={() => dispatch(hideDeleteModal())}>
            CANCEL
          </button>
          <button className="button" type="button" onClick={onDelete}>
            DELETE ITEM
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
