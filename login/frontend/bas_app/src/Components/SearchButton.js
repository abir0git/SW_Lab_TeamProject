// import Modal from "./Modal";
const SearchButton = () => {
    
    return ( 
        <div>
            <form action="http://127.0.0.1:5000/search" method="post">
            <label>
        Search book: <input name="search_key" />
            </label>
            <button type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default SearchButton;