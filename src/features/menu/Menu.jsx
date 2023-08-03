/* eslint-disable react-hooks/exhaustive-deps */
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { menu_mock } from '../../mockData/menu_mock'
import { updateFilteredMenu, updateMenu } from '../user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../ui/Loader';
import { useState } from 'react';

function Menu() {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.user.filteredMenu)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMenuItems();
  }, [])

  const getMenuItems = async () => {
    setIsLoading(true);
    const menu = await getMenu();
    dispatch(updateMenu(menu.length ? menu : menu_mock))
    dispatch(updateFilteredMenu(menu.length ? menu : menu_mock))
    setIsLoading(false)
  }

  if (isLoading) return <Loader />

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {
        menu?.length ? menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        )) : <div className="px-4 py-6">
          <h2 className="mb-8 text-xl font-semibold">No Data Found.</h2>
        </div>
      }
    </ul>
  );
}

export default Menu;
