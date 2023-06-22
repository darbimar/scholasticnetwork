import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { editItem } from '../../store/slices/itemsSlice';
import { hideEditForm, hideForm } from '../../store/slices/modalSlice';
import Input from '../Input/Input';
import item from './../../assets/item.svg';
import close from './../../assets/close.svg';
import './Form.scss';

const FormEdit = () => {
  const { id, name, description, price } = useSelector((state: RootState) => state.edit);
  const [editName, setEditName] = useState(name);
  const [editPrice, setEditPrice] = useState<number | undefined>(price);
  const [editDescription, setEditDescription] = useState(description);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    const item: any = {
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

  const closeForm = () => {
    dispatch(hideForm());
    dispatch(hideEditForm());
  };

  return (
    <div className="form">
      <div className="content">
        <div className="form__top">
          <div className="form__title">Edit item</div>
          <img src={close} className="form__close" alt="Close form" onClick={closeForm} />
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
    </div>
  );
};

export default FormEdit;
