const Addquery = () => {
    return ( 
        <div className="form-box1">
        <h2>Addquery </h2>
        <br />
        <form className="userform" action="http://localhost:5000/customer/addquery" method="post">
          <div className="inputfield">
            <label>Book-Name </label>
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

          <button className="sgnbutton" type="submit" >Submit</button>
  
        </form>
  
      </div>
     );
}
 
export default Addquery;