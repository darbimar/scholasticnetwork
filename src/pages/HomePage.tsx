import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { hideEditForm, showForm } from '../store/slices/modalSlice';
import { setLoading } from '../store/slices/loadSlice';
import Item from '../components/Item/Item';
import Form from '../components/Form/Form';
import FormEdit from '../components/Form/FormEdit';
import Loading from '../components/Loading/Loading';
import NotFound from '../components/NotFound/NotFound';

const HomePage = () => {
  const items = useSelector((state: RootState) => state.item.items);
  const { isShow, isEdit } = useSelector((state: RootState) => state.modal);
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  }, [items]);

  const openForm = () => {
    dispatch(showForm());
    dispatch(hideEditForm());
    document.body.style.overflow = 'hidden';
  };

  const products = items
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item: any) => <Item key={item.id} {...item} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <h1 className="content__title">Items list</h1>
          <button className="button" type="button" onClick={openForm}>
            CREATE ITEM
          </button>
        </div>

        <div className="content__items">
          {products.length === 0 ? <NotFound /> : loading ? <Loading /> : products}
        </div>
        {isShow && isEdit ? <FormEdit /> : isShow && <Form />}
      </div>
    </div>
  );
};

export default HomePage;
