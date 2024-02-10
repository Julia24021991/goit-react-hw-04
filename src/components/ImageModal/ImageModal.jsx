import Modal from 'react-modal';
import css from "./ImageModal.module.css"

Modal.setAppElement('#root');

export const ImageModal = ({ modalIsOpen, afterOpenModal, closeModal, onSelectImg: { urls, alt_description, description } }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                overlayClassName={css.backdrop}
                className={css.modal}
            >
                <img className={css.image} src={urls.regular} alt={alt_description} width="500" />
                <p>{description}</p>
            </Modal>
        </div>
    );
}