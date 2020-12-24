import { animateScroll as scroll } from 'react-scroll';
import './Button.css';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  scroll = () => {
    onClick();
    scroll.scrollToBottom();
  };

  return (
    <button onClick={scroll} className="Button" type="button">
      Загрузити ще...
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
