import img from './../../assets/product-not-found.jpeg';
import './NotFound.scss';



function NotFound() {
    return (
        <div className='not-found'>
            <img src={img} alt="not foind"className='not-found__image' />
            <h3>NO ITEMS FOUND</h3>
        </div>
    );
}

export default NotFound;