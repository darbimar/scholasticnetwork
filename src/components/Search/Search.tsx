import { useEffect } from 'react';
import'./Search.scss';
import { useDispatch } from 'react-redux';
import img from './../../assets/search.svg';
import { setSearchValue } from '../../store/slices/searchSlice';
import { isLoaded, isLoading } from '../../store/slices/loadSlice';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const newSearch = searchParams.get('items') || "";

  useEffect(()=> {
    dispatch(setSearchValue(newSearch));
  }, [newSearch])



  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({items: e.target.value})

    dispatch(isLoading());
    setTimeout(() => {
        dispatch(isLoaded());
    }, 500);
  };

  return (
    <div className='search'>

      <img src={img} alt='search' className='search__icon' />
      <input
        value={newSearch}
        className='search__input'
        placeholder="Search"
        onChange={onChangeInput}
      />
    </div>
  );
}

export default Search;