import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ photos, onClick }) => {
    return (
        <ul className={css.list}>
            {photos.map((photo) => (
                <li className={css.li} key={photo.id} onClick={() => onClick(photo)}>
                    <ImageCard photo={photo} />
                </li>
            ))}
        </ul>
    );
};