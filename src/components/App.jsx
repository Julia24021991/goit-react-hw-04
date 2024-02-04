
import './App.css'
import { fetch } from "./api"
import { nanoid } from 'nanoid'
import { useState } from 'react';
import { SearchBar } from "./SearchBar/SearchBar"
import { ImageGallery } from './ImageCard/ImageCard';


export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const searchImages = async (newQuery) => {
    const id = nanoid();

    setQuery(`${id}-${newQuery}`);
    setPage(1);
    setImages([]);
  }


  return (
    <div>
      <SearchBar onSearch={searchImages} />
      <ImageGallery photos={images} />
    </div>
  )
}


