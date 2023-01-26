import PT from 'prop-types';
const MenuItem = ({ name, link, img }) => {
    return (
        <li>
            <a href={link}>
                {img}
                {name}
            </a>
        </li>
    );  
};

export default MenuItem;

MenuItem.propTypes = {
    name: PT.string.isRequired,
    link: PT.string.isRequired,
    img: PT.object.isRequired,
};