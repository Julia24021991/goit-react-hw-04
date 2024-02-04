import { ImageCard } from "../ImageCard/ImageCard";
export const ImageGallery = ({ photos, onClick }) => {
    return (
        <ul>
            {photos.map(photo => (
                <li key={photo.id} onClick={() => onClick(photo)}>
                    <ImageCard photo={photo} />
                </li>
            ))}
        </ul>
    )
}