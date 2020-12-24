import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, largeImageURL }) {
  //на Хуках
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  //   componentDidMount() {
  //     window.addEventListener('keydown', this.handleKeyDown);
  //   }
  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.handleKeyDown);
  //   }

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  //   handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       this.props.onClose();
  //     }
  //   };
  const handeleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  //   handeleBackdropClick = event => {
  //     if (event.currentTarget === event.target) {
  //       this.props.onClose();
  //     }
  //   };

  return createPortal(
    <div className="Overlay" onClick={handeleBackdropClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
export default Modal;
