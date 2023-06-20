import img from './../../assets/product-not-found.jpeg';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src={img} alt="not found" />
      <h3>NO ITEMS FOUND</h3>
    </div>
  );
};

export default NotFound;
