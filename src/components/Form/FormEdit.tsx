import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { editItem } from '../../store/slices/itemsSlice';
import { hideEditForm, hideForm } from '../../store/slices/modalSlice';
import Input from '../Input/Input';
import item from './../../assets/item.svg';
import close from './../../assets/close.svg';
import Modal from '../Modal/Modal';
import './Form.scss';

interface Item {
  id: string;
  editName: string;
  editPrice: number | undefined;
  editDescription: string;
}

const FormEdit: FC = () => {
  const { id, name, description, price } = useSelector((state: RootState) => state.edit);
  const [editName, setEditName] = useState<string>(name);
  const [editPrice, setEditPrice] = useState<number | undefined>(price);
  const [editDescription, setEditDescription] = useState<string>(description);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const item: Item = {
      id,
      editName,
      editPrice,
      editDescription,
    };
    e.preventDefault();
    dispatch(editItem(item));
    dispatch(hideForm());
    dispatch(hideEditForm());
    setEditName('');
    setEditPrice(0);
    setEditDescription('');
  };

  const handleClose = () => {
    dispatch(hideForm());
    dispatch(hideEditForm());
    document.body.style.overflow = 'scroll';
  };

  return (
    <Modal onClick={handleClose}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <div className="form__top">
          <div className="form__title">Edit item</div>
          <img src={close} className="form__close" alt="Close form" onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__main">
            <div className="item-image-wrapper">
              <img className="item-image" src={item} alt="item" />
            </div>
            <div className="form__main-inputs">
              <Input
                className="form__input"
                type="text"
                value={editName}
                maxLength={200}
                placeholder="Name"
                name="name"
                id="name"
                required
                onChange={(event) => setEditName(event.target.value)}
              />
              <Input
                className="form__input"
                type="number"
                value={editPrice}
                min="1"
                placeholder="Price"
                name="price"
                id="price"
                required
                onChange={(event) => setEditPrice(Number(event.target.value))}
              />
            </div>
          </div>
          <textarea
            className="form__input form__input--big"
            value={editDescription}
            maxLength={1000}
            required
            onChange={(event) => setEditDescription(event.target.value)}>
            Description
          </textarea>
          <button className="button" type="submit">
            EDIT ITEM
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default FormEdit;
