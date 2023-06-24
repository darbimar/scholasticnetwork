import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, addItem } from '../../store/slices/itemsSlice';
import { hideForm } from '../../store/slices/modalSlice';
import Input from '../Input/Input';
import item from './../../assets/item.svg';
import close from './../../assets/close.svg';
import Modal from '../Modal/Modal';
import './Form.scss';

const Form: FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();

  const id = String(Math.floor(Math.random() * 90000) + 10000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const item: ListItem = {
      id,
      name,
      price,
      description,
    };
    e.preventDefault();
    dispatch(addItem(item));
    dispatch(hideForm());
    setName('');
    setPrice('');
    setDescription('');
  };

  const handleClose = () => {
    dispatch(hideForm());
    document.body.style.overflow = 'scroll';
  };

  return (
    <Modal onClick={handleClose}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <div className="form__top">
          <div className="form__title">Create new item</div>
          <img
            className="form__close"
            src={close}
            alt="Close form"
            onClick={() => dispatch(hideForm())}
          />
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
                value={name}
                maxLength={200}
                placeholder="Name"
                name="name"
                id="name"
                required
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                className="form__input"
                type="number"
                value={price}
                min="1"
                placeholder="Price"
                name="price"
                id="price"
                required
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <textarea
            className="form__input form__input--big"
            value={description}
            maxLength={1000}
            required
            onChange={(event) => setDescription(event.target.value)}>
            Description
          </textarea>
          <button className="button" type="submit">
            CREATE ITEM
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Form;
