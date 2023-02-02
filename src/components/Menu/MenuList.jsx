import MenuItem from './MenuItem';
import { menuConfig } from 'constants/menu';

const MenuList = () => {
  return (
    <nav>
      <ul>
        {menuConfig.map(({ name, link, img }) => (
          <MenuItem key={name} name={name} link={link} img={img} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
