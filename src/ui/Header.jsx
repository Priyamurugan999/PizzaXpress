import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between text-xl border-b border-stone-200 bg-rose-400 px-4 py-3 sm:px-6 font-bold">
      <Link to="/" className="tracking-widest">
       🍕PizzaXpress 
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
