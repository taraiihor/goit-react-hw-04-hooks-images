import { useState } from 'react';
import './Searchbar.css';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  //   state = {
  //     searchImage: '',
  //   };

  const [searchImage, setSearchImage] = useState('');

  //На хуках
  const handleNameChangle = ({ target }) => {
    const searchImage = target.value;
    setSearchImage(searchImage);
  };
  //   handleNameChangle = event => {
  //     const { value } = event.currentTarget;
  //     this.setState({ searchImage: value });
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchImage.trim() === '') {
      alert('Ведіть щось');
      return;
    }
    onSubmit(searchImage);
    reset();
  };
  //   handleSubmit = event => {
  //     event.preventDefault();
  //     const { searchImage } = this.state;
  //     if (searchImage.trim() === '') {
  //       alert('Ведіть щось');
  //       return;
  //     }
  //     this.props.onSubmit(searchImage);
  //     this.reset();
  //   };

  const reset = () => {
    setSearchImage('');
  };
  //   reset = () => {
  //     this.setState({ searchImage: '' });
  //   };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={searchImage}
          className="SearchForm-input"
          type="text"
          placeholder="Search images and photos"
          onChange={handleNameChangle}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
