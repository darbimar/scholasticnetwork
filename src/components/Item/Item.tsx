import './Item.scss';
import logo from './../../assets/item.svg';
import bin from './../../assets/bin.svg';
import { useDispatch, useSelector} from 'react-redux';
import { showEditForm, showForm, showDeleteModal } from '../../store/slices/modalSlice';
import { Link } from 'react-router-dom';
import { correctItem } from '../../store/slices/editSlice';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { RootState } from '../../store';

type ItemProps = {
    id: string, name: string, price: string, description: string
  }

const Item: React.FC<ItemProps> =({id, name, price, description})  => {

    const { isDelete } = useSelector((state: RootState) => state.modal);


    const dispatch = useDispatch();

    if (name.length > 80 ) {
        name = name.substring(0, 80) + "...";
    }

    if (description.length > 316) {
        description = description.substring(0, 316) + "...";
    }


    const editData = () => {
        const item: any = {
            id, name, price, description
        };
        dispatch(showForm());
        dispatch(showEditForm());
        dispatch(correctItem(item))
    }

    const onDelete = () => {
        dispatch(showDeleteModal());
    }

    return (
        <div className='item'>
            <div className="item-image"><img src={logo} alt="item" /></div>  
            <div className="item__text">
            <Link to={`/item/${id}`}>
                <div className="item__title">{name}</div>
            </Link>
                <p>{description}</p>
            </div>
            <div className="item__data">
                <div className="item__id">ID: {id}</div>
                <div className="item__price">${price}</div>
                <div className="item__correct">
                    <button className="button button-small" onClick={editData}>EDIT</button>
                    <button className='button-bin'><img src={bin} alt="bin" onClick={onDelete}/></button>
                </div>
                
            </div>
            {isDelete && <ConfirmModal id={id}/>}
        </div>
    );
}

export default Item;