import { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setSearchValue } from '../../store/slices/searchSlice';
import { setLoading } from '../../store/slices/loadSlice';
import Input from '../Input/Input';
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

    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  };

  return (
    <div className="search">
      <img className="search__icon" src={img} alt="" />
      <Input
        className="search__input"
        value={newSearch}
        placeholder="Search"
        type="search"
        name="search"
        id="search"
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
