import bin from './../../assets/bin.svg';
import logo from './../../assets/item.svg';
import { Link } from 'react-router-dom';

interface SingleItemProps {
    item: {
      id: string;
      name: string;
      description: string;
      price: string;
    };
    editData: () => void;
    onDelete: () => void;
}

const SingleItem: React.FC<SingleItemProps> =({item, editData, onDelete}) => {
    return (
        <div className="container">
            <div className='single-item'>
                <div className="item__data item__data-single">
                    <div className="item-image item-image_big"><img src={logo} alt="item" /></div> 
                    <div className="item__correct">
                        <button className="button button-small" onClick={editData}>EDIT</button>
                        <button className='button-bin' onClick={onDelete}><img src={bin} alt="bin" /></button>
                    </div>
                    <div className="item__price">${item?.price}</div>
                </div>
                <div className="item__text item__text-single">
                    <div className="item__id">ID: {item?.id}</div>
                    <div className="item__title item__title-single">{item?.name}</div>
                    <p>{item?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;