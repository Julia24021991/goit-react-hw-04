import toast from 'react-hot-toast';
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

export const SearchBar = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.elements.query.value === "") {
            toast.error("The string is empty!")
            return;
        }
        onSearch(event.target.elements.query.value)
        event.target.reset();
    }
    return (

        <header>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                />
                <button className={css.button} type="submit"><FcSearch />    Search</button>
            </form>
        </header>

    )
}