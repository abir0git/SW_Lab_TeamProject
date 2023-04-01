// import Modal from "./Modal";
const Search = () => {
    
    return ( 
        <div className="form-box1">
            <h2>Search Book</h2>
            <form className="userform" action="http://127.0.0.1:5000/customer/search" method="post">
            <div className="inputfield">
                        <span></span><label>Search book-name:</label>
                        <input
                            name="book_name"
                            type="text"
                        />
            </div>
            {/* <label>
        Search book-author: <input name="book_author" />
            </label> */}
            <div className="inputfield">
                        <span></span><label>Search book-author:</label>
                        <input
                            name="book_author"
                            type="text"
                        />
            </div>
            <button className="sgnbutton" type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default Search;