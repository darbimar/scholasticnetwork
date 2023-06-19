import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/itemsSlice';
import { hideForm } from '../../store/slices/modalSlice';
import item from './../../assets/item.svg';
import close from './../../assets/close.svg';
import './Form.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const id = Math.floor(Math.random() * 90000) + 10000;

  const handleSubmit = (e: any) => {
    const item: any = {
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

  return (
    <div className="form" onClick={() => dispatch(hideForm())}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="form__top">
          <div className="form__title">Create new item</div>
          <img
            className="form__close"
            src={close}
            alt="close"
            onClick={() => dispatch(hideForm())}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__main">
            <div className="item-image">
              <img src={item} alt="item" />
            </div>
            <div className="form__main-inputs">
              <input
                className="form__input"
                type="text"
                value={name}
                maxLength={200}
                placeholder="Name"
                required
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="form__input"
                type="number"
                value={price}
                min="1"
                placeholder="Price"
                required
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <textarea
            className="form__input form__input-big"
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
    </div>
  );
};

export default Form;
