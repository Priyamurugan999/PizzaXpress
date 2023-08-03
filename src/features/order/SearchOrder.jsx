import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredMenu } from '../user/userSlice';
import { useLocation } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const menu = useSelector((state) => state.user.menu);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(e.target.value)
    e.preventDefault();
    const filteredPizzas = menu.filter((pizza) =>
      pizza.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(updateFilteredMenu(filteredPizzas))
  }

  if (location?.pathname !== '/menu') return null;
  return (
    <input
      placeholder="Search Pizza"
      value={query}
      onChange={(e) => handleChange(e)}
      className="w-28 rounded-full bg-rose-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
    />
  );
}

export default SearchOrder;
