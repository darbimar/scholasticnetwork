import { useLocation } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss'

function Header() {
    const { pathname } = useLocation();
    return (
        <div className='header'>
            <div className="container">
                <div className="header__logo">Test Homework</div>
                {pathname === '/' && <Search />}
            </div>
        </div>
    );
}

export default Header;