import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import { correctItem } from '../store/slices/editSlice';
import { showDeleteModal, showEditForm, showForm } from '../store/slices/modalSlice';
import FormEdit from '../components/Form/FormEdit';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';
import SingleItem from '../components/SingleItem/SingleItem';
import NotFound from '../components/NotFound/NotFound';

const ItemPage = () => {
  const { isEdit, isDelete } = useSelector((state: RootState) => state.modal);

  const items = useSelector((state: RootState) => state.item.items);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const itemId = pathname.slice(6);

  const item = items.find((obj) => obj.id == itemId);

  const editData = () => {
    dispatch(showForm());
    dispatch(showEditForm());
    dispatch(correctItem(item));
  };

  const onDelete = () => {
    dispatch(showDeleteModal());
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top content__top-single">
          <Link to="/">
            <button className="button button-white">&lt; BACK</button>
          </Link>
          <div className="content__title">Current item</div>
        </div>
        {item ? <SingleItem editData={editData} onDelete={onDelete} item={item} /> : <NotFound />}
        {isEdit && <FormEdit />}
        {isDelete && <ConfirmModal id={item?.id} />}
      </div>
    </div>
  );
};

export default ItemPage;
