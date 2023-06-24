import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { correctItem } from '../store/slices/editSlice';
import { showDeleteModal, showEditForm, showForm } from '../store/slices/modalSlice';
import FormEdit from '../components/Form/FormEdit';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';
import SingleItem from '../components/SingleItem/SingleItem';
import NotFound from '../components/NotFound/NotFound';

const ItemPage: FC = () => {
  const { isEdit, isDelete } = useSelector((state: RootState) => state.modal);

  const items = useSelector((state: RootState) => state.item.items);
  const dispatch = useDispatch();

  const { id } = useParams();

  const item = items.find((obj) => obj.id === id);

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
        <div className="content__top content__top--single">
          <Link to="/">
            <button className="button button--white" type="button">
              &lt; BACK
            </button>
          </Link>
          <h1 className="content__title">Current item</h1>
        </div>
        {item ? <SingleItem editData={editData} onDelete={onDelete} item={item} /> : <NotFound />}
        {isEdit && <FormEdit />}
        {isDelete && <ConfirmModal id={item?.id} />}
      </div>
    </div>
  );
};

export default ItemPage;
