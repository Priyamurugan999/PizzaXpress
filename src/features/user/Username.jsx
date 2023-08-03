import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-lg font-bold md:block text-white">{username} </div>
  );
}

export default Username;
