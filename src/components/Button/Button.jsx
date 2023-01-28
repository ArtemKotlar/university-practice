import PT from 'prop-types';
import { BiPlusCircle } from 'react-icons/bi';
import { ButtonStyled } from './Button.styled';

const Button = ({
  icon,
  text,
  type = 'button',
  action,
  styles,
  ...restProps
}) => {
  return (
    <ButtonStyled
      className={styles}
      type={type}
      onClick={action}
      {...restProps}
    >
      {icon && <BiPlusCircle />}
      {text}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  icon: PT.bool,
  text: PT.string.isRequired,
  type: PT.string,
  action: PT.func,
  styles: PT.string,
  restProps: PT.any,
};
