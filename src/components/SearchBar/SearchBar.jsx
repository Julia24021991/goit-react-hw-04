import toast from 'react-hot-toast';

export const SearchBar = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault;
        if (event.target.elements.query.value === "") {
            toast("The string is empty!")
            return;
        }
        onSearch(event.target.elements.query.value)
        event.target.reset;
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
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