import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;