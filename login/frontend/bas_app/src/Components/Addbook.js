const Addbook = () => {
    return ( 
        <div >
        <h2>Addbook </h2>
        <br />
        <form className="addbook" action="http://localhost:5000/clerk/addbook" method="post">
          <div className="inputfield">
            <label>Name </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
            />
          </div>

          <div className="inputfield">
            <label>Author </label>
            <input
              type="text"
              name="author"
              required
            />
          </div>  
          
          <div className="inputfield">
            <label>ISBN </label>
            <input
              type="text"
              name="ISBN"
              required
            />
          </div>  
          
          <div className="inputfield">
            <label>Publisher </label>
            <input
              type="text"
              name="publisher"
              required
            />
          </div>  
          
          <div className="inputfield">
            <label>copies </label>
            <input
              type="text"
              name="copies"
              required
            />
          </div>  
          
          <div className="inputfield">
            <label>shelf no </label>
            <input
              type="text"
              name="shelf"
              required
            />
          </div>  
  
          <button type="submit" >Submit</button>
  
        </form>
  
      </div>
     );
}
 
export default Addbook;