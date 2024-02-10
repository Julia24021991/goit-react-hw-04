import { useRef, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Loader } from "./Loader/Loader"
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { ImageModal } from './ImageModal/ImageModal';
import { fetchData } from "./api";


export const App = () => {
  const totalPages = useRef(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [onSelectImg, setOnSelectImg] = useState(null);



  const searchImages = async (newQuery) => {

    const id = nanoid(5);
    setQuery(`${id}-${newQuery}`);
    setPage(1);
    setImages([]);
    totalPages.current = 0;

  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoad(true);
        setError(false);
        const fetchedImages = await fetchData(query.split('-')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        totalPages.current = fetchedImages.total_pages;
        if (totalPages.current === 0) {
          toast.error('Oops, please try another word!', {
            duration: 1000,
            position: 'bottom-center',
          });
        }
      } catch {
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

  function openModal(photo) {
    setOnSelectImg(photo);
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.body.style.overflow = "scroll";
    setModalIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery photos={images} onClick={openModal} />}
      {load && <Loader />}
      {error && <ErrorMessage />}
      {onSelectImg && <ImageModal modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        onSelectImg={onSelectImg} />}

      {images.length > 0 && !load && (<LoadMoreBtn onClick={handleClick} />)}
      <Toaster />
    </div>
  );
};