const Addbook = () => {
    return ( 
        <div className="form-box1">
        <h2>Addbook </h2>
        <br />
        <form className="userform" action="http://localhost:5000/clerk/addbook" method="post">
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
            <label>price </label>
            <input
              type="text"
              name="price"
              required
            />
          </div>  

          <div className="inputfield">
            <label>Buy price</label>
            <input
              type="text"
              name="buy_price"
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
          
  
          <button className="sgnbutton" type="submit" >Submit</button>
  
        </form>
  
      </div>
     );
}
 
export default Addbook;