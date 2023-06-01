import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import bin from './../assets/bin.svg';
import logo from './../assets/item.svg';


function ItemPage() {

    const items = useSelector((state:RootState) => state.item.items);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const itemId = pathname.slice(6);

    const item = items.find((obj) =>  obj.id == itemId);


    return (
        <div className="content">
            <div className="container">
                <div className="content__top content__top-single">
                    <Link to="/"><button className="button button-white">&lt;  BACK</button></Link>
                    <div className="content__title">Current item</div> 
                </div>
                <div className='single-item'>
                    <div className="item__data item__data-single">
                        <div className="item-image item-image_big"><img src={logo} alt="item" /></div> 
                        <div className="item__correct">
                            <button className="button button-small" >EDIT</button>
                            <button className='button-bin'><img src={bin} alt="bin" /></button>
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
        </div>
        
    );
}

export default ItemPage;