import { useDispatch } from 'react-redux';
import './ConfirmModal.scss';
import { deleteItem } from '../../store/slices/itemsSlice';
import { hideDeleteModal } from '../../store/slices/modalSlice';

type ConfirmModalProps = {
  id: string | undefined
}

const  ConfirmModal: React.FC<ConfirmModalProps> = ({id}) => {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteItem(id));
    dispatch(hideDeleteModal())
  }

  return (
    <div className="confirm">
      <div className="confirm__content">
        <div className="confirm__title">Are you sure you want to delete this item?</div>
        <div className="confirm__subtitle">You will not be able to restore it.</div>
        <div className="confirm__buttons">
          <button className="button button-white" onClick={() => dispatch(hideDeleteModal())} >CANCEL</button>
          <button className="button" onClick={onDelete}>DELETE ITEM</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;