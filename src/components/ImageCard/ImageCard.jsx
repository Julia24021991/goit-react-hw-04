export const ImageCard = ({ photo: { urls, description } }) => {
    return (
        <div>
            <img src={urls.small} alt={description}
                width="240" />
        </div>
    )

}