import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { fetchData } from "./api";


export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = async (newQuery) => {
    if (newQuery) {
      const id = nanoid();

      setQuery(`${id}-${newQuery}`);
      setPage(1);
      setImages([]);
    }
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchImages() {
      try {
        const fetchedImages = await fetchData(query.split('-')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    fetchImages();

  }, [query, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={searchImages} />

      <ImageGallery photos={images} />
      {error && <ErrorMessage />}
      {images.length > 0 && !load && (<LoadMoreBtn onClick={handleClick} />)}
    </div>
  );
};
