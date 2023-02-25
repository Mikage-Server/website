import Logout from './logout';
import Profile from './profile';
import Services from './services';
import Status from './status';

const Menu = () => {
  return (
    <div className="w-48 h-screen text-center bg-gray-100 border-r-2 border-gray-300 flex flex-col items-center relative left-20">
      <Profile />
      <Status />
      <Services />
      <Logout />
    </div>
  );
};

export default Menu;
