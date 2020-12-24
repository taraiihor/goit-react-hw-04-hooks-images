import PropTypes from 'prop-types';

const KEY = '8052974-676f52671a56653f7826cdc16';

function fetchArticles(image, page) {
  return fetch(
    `https://pixabay.com/api/?q=${image}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`нема зображення ${image}`));
  });
}

const API = {
  fetchArticles,
};

fetchArticles.propTypes = {
  image: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default API;
