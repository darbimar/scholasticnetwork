import { useSelector,useDispatch } from "react-redux";
import Form from '../components/Form/Form';
import { RootState } from "../store";
import Item from "../components/Item/Item";
import { useEffect, useRef } from "react";
import { createForm, showForm } from "../store/slices/modalSlice";
import FormEdit from "../components/Form/FormEdit";
import Loading from "../components/Loading/Loading";
import { isLoading } from "../store/slices/loadSlice";
import { isLoaded } from "../store/slices/loadSlice";
import NotFound from "../components/NotFound/NotFound";

function HomePage() {

    const items = useSelector((state:RootState) => state.item.items);
    const isShow = useSelector ((state: RootState) => state.modal.isShow);
    const isEdit = useSelector ((state: RootState) => state.modal.isEdit);
    const searchValue = useSelector((state:RootState) => state.search.searchValue);
    const loading = useSelector((state:RootState) => state.loading.loading);
    const dispatch = useDispatch();
    const isMounted = useRef(false); //проверка, был ли первый рендер


    useEffect(() => {
        if(isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('list', json);
        }
        isMounted.current = true;

        dispatch(isLoading());

        setTimeout(() => {
            dispatch(isLoaded());
        }, 500);

    }, [items])
    

    const openForm = () => {
        dispatch(showForm());
        dispatch(createForm())
    }


    let products = items
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    .map((item: any) =>  <Item key={item.id} {...item}/> )

    return (
       <div className="content">
            <div className="container">
                <div className="content__top">
                    <div className="content__title">Items list</div>
                    <button className="button" onClick={openForm}>CREATE ITEM</button>
                </div>

                <div className="content__items">
                  {products.length === 0 ? <NotFound/> : loading ? <Loading/> : products}
                </div>
                {isShow && isEdit ? <FormEdit /> : isShow && <Form  />}
            </div>
       </div>
       
       
    );
}

export default HomePage;