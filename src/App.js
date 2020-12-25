import { useState, useEffect } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { animateScroll as scroll } from 'react-scroll';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import ErrorView from './components/ErrorView';
import API from './api/api';

function App() {
  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   state = {
  //     articles: [],
  //     images: '',
  //     page: 1,
  //     loading: false,
  //     error: null,
  //   };

  const handleFormSubmit = query => {
    setImages(query);
    setPage(1);
    setArticles([]);
    setError(null);
  };
  //   handleFormSubmit = query => {
  //     this.setState({ images: query, page: 1, articles: [], error: null });
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.images !== this.state.images) {
  //       this.setState({ loading: true });
  //       this.fetchArticles();
  //     }
  //   }
  useEffect(() => {
    if (images === '') {
      return;
    }

    setLoading(true);

    API.fetchArticles(images, page)
      .then(articles => {
        if (articles.hits.length === 0) {
          return Promise.reject(new Error(`такого зображення нема ${images}`));
        }
        setArticles(prevState => [...prevState, ...articles.hits]);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
    scroll.scrollToBottom();
  }, [images, page]);

  //   fetchArticles = () => {
  //     const { images, page } = this.state;
  //     fetch(
  //       `https://pixabay.com/api/?q=${images}&page=${page}&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }

  //         return Promise.reject(new Error('нема зображення'));
  //       })
  //       .then(articles => {
  //         this.setState(prevState => ({
  //           articles: [...prevState.articles, ...articles.hits],
  //           page: prevState.page + 1,
  //         }));
  //       })
  //       .catch(error => this.setState({ error }))
  //       .finally(() => this.setState({ loading: false }));
  //   };
  const updatePage = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {error && <ErrorView message={error.message} />}
      <ImageGallery articles={articles} />

      {loading && (
        <Loader
          className="Loding"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      )}
      {articles.length > 11 && <Button onClick={updatePage} />}
    </div>
  );
}
export default App;
