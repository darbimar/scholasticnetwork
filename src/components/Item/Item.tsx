import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { showEditForm, showForm, showDeleteModal } from '../../store/slices/modalSlice';
import { correctItem } from '../../store/slices/editSlice';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import logo from './../../assets/item.svg';
import bin from './../../assets/bin.svg';
import './Item.scss';
import { ListItem } from '../../store/slices/itemsSlice';

type ItemProps = {
  id: string;
  name: string;
  price: string;
  description: string;
};

const Item: React.FC<ItemProps> = ({ id, name, price, description }) => {
  const { isDelete } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  if (name.length > 80) {
    name = name.substring(0, 80) + '...';
  }

  if (description.length > 316) {
    description = description.substring(0, 316) + '...';
  }

  const editData = () => {
    const item: ListItem = {
      id,
      name,
      price,
      description,
    };
    dispatch(showForm());
    dispatch(showEditForm());
    dispatch(correctItem(item));
    document.body.style.overflow = 'hidden';
  };

  const onDelete = () => {
    dispatch(showDeleteModal());
    document.body.style.overflow = 'hidden';
  };

  const link = `/item/${id}`;

  return (
    <div className="item">
      <Link to={link}>
        <div className="item-image-wrapper">
          <img className="item-image" src={logo} alt="Go to item page" />
        </div>
      </Link>
      <div className="item__text">
        <Link to={link}>
          <div className="item__title">{name}</div>
        </Link>
        <p>{description}</p>
      </div>
      <div className="item__data">
        <div className="item__id">ID: {id}</div>
        <div className="item__price">${price}</div>
        <div className="item__correct">
          <button className="button button--small" type="button" onClick={editData}>
            EDIT
          </button>
          <button className="button--bin" type="button" aria-label="Delete item">
            <img src={bin} alt="Delete item" onClick={onDelete} title="Delete item" />
          </button>
        </div>
      </div>
      {isDelete && <ConfirmModal id={id} />}
    </div>
  );
};

export default Item;
