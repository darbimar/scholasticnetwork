import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  editItem } from "../../store/slices/itemsSlice";
import './Form.scss';
import item from './../../assets/item.svg';
import close from './../../assets/close.svg';
import { hideForm } from "../../store/slices/modalSlice";
import { RootState } from "../../store";

const  FormEdit  = () => {

  const {id, name, description, price} = useSelector((state: RootState) => state.edit)
  const [editName, setEditName] = useState(name);
  const [editPrice, setEditPrice] = useState<number | undefined>(price);
  const [editDescription, setEditDescription] = useState(description);
  const dispatch = useDispatch();


  const handleSubmit = (e: any) => {

    const item: any = {
      id, editName, editPrice, editDescription
    };
    e.preventDefault();
    dispatch(editItem(item));
    dispatch(hideForm());
    setEditName('');
    setEditPrice(0);
    setEditDescription('');
  };


  return (
    <div className="form">
      <div className="content">
        <div className="form__top">
          <div className="form__title">Edit item</div>
          <img src={close} alt="close" className="form__close" onClick={()=>dispatch(hideForm())}/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__main">
            <div className="item-image"><img src={item} alt="item" /></div>
            <div className="form__main-inputs">
              <input
                className="form__input"
                type="text"
                value={editName}
                maxLength={200}
                placeholder="Name"
                required
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                className="form__input"
                type="text"
                value={editPrice}
                min="1"
                placeholder="Price"
                required
                onChange={(e) => setEditPrice(Number(e.target.value))}
              />
            </div>
          </div>
          <textarea
            className="form__input form__input-big"
            value={editDescription}
            maxLength={1000}
            required
            onChange={(e) => setEditDescription(e.target.value)}>
              Description
            </textarea>
          <button className="button" type="submit">CREATE ITEM</button>
        </form>
        </div>
    </div>
  );
};

export default FormEdit;