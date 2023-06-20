import { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setSearchValue } from '../../store/slices/searchSlice';
import { isLoaded, isLoading } from '../../store/slices/loadSlice';
import img from './../../assets/search.svg';
import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearch = searchParams.get('items') || '';

  useEffect(() => {
    dispatch(setSearchValue(newSearch));
  }, [newSearch]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ items: event.target.value });

    dispatch(isLoading());
    setTimeout(() => {
      dispatch(isLoaded());
    }, 500);
  };

  return (
    <div className="search">
      <img className="search__icon" src={img} alt="" />
      <input
        className="search__input"
        value={newSearch}
        placeholder="Search"
        type="search"
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
