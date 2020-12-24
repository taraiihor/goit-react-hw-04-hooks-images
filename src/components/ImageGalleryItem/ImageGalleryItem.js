import { useState } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, largeImageURL }) {
  // стейт на Хуках
  const [showModal, setShowModal] = useState(false);
  // стейт на класах
  //   state = {
  //     showModal: false,
  //   };

  //виклик модального вікна на Хуках
  const toggleModal = () => setShowModal(state => !state);
  //виклик модального вікна на класах
  // toggleModal = () => {
  //     this.setState(({ showModal }) => ({
  //       showModal: !showModal,
  //     }));
  //   };

  return (
    <li>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
