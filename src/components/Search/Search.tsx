import { useState } from 'react';
import'./Search.scss';
import { useDispatch } from 'react-redux';
import img from './../../assets/search.svg';
import { setSearchValue } from '../../store/slices/searchSlice';
import { isLoaded, isLoading } from '../../store/slices/loadSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue  = (value: string) => {
    dispatch(setSearchValue(value));
  }


  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
    dispatch(isLoading());

    setTimeout(() => {
        dispatch(isLoaded());
    }, 2500);
  };


  return (
    <div className='search'>

      <img src={img} alt='search' className='search__icon' />
      <input
        value={value}
        className='search__input'
        placeholder="Search"
        onChange={onChangeInput}
      />
    </div>
  );
}

export default Search;