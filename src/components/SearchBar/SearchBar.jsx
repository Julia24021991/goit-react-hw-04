import toast from 'react-hot-toast';
import css from "./SearchBar.module.css"

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
        <header className={css.form}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}