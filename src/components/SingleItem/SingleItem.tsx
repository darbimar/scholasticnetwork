import bin from './../../assets/bin.svg';
import logo from './../../assets/item.svg';

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

const SingleItem: React.FC<SingleItemProps> = ({ item, editData, onDelete }) => {
  return (
    <div className="container">
      <div className="single-item">
        <div className="item__data item__data--single">
          <div className="item-image-wrapper item-image-wrapper--big">
            <img className="item-image" src={logo} alt="item" />
          </div>
          <div className="item__correct">
            <button className="button button--small" type="button" onClick={editData}>
              EDIT
            </button>
            <button
              className="button--bin"
              type="button"
              aria-label="Delete item"
              onClick={onDelete}>
              <img src={bin} alt="Delete item" title="Delete item" />
            </button>
          </div>
          <div className="item__price">${item?.price}</div>
        </div>
        <div className="item__text item__text--single">
          <div className="item__id">ID: {item?.id}</div>
          <div className="item__title item__title--single">{item?.name}</div>
          <p>{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
