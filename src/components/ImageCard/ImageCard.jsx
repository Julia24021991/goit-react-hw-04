
import css from "./ImageCard.module.css"

export const ImageCard = ({ photo: { urls, alt_description
} }) => {
    return (
        <div>
            <img className={css.photo} src={urls.small} alt={alt_description
            }
                width="360" />
        </div>
    )

}