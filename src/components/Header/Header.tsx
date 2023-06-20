import { Link, useLocation } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">Goods Accounting</div>
        </Link>
        {pathname === '/' && <Search />}
      </div>
    </header>
  );
};

export default Header;
