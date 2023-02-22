import PT from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ name, link, img }) => {
  return (
    <li>
      <NavLink to={link}>
        {img}
        {name}
      </NavLink>
    </li>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  name: PT.string.isRequired,
  link: PT.string.isRequired,
  img: PT.object.isRequired,
};
