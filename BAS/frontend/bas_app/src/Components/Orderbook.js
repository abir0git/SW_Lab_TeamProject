const Orderbook = (props) => {

    return ( 
        <div className="form-box1">
        <h2>Order book </h2>
        <br />
        <form className="userform" action="http://localhost:5000/customer/orderbook" method="post">
          <div className="inputfield">
            <label>ISBN </label>
            <input
              type="text"
              name="ISBN"
              required
              autoComplete="off"
            />
          </div>

          <div className="inputfield">
            <label>Copies </label>
            <input
              type="text"
              name="copies"
              required
            />
          </div>   
          
          <button className="sgnbutton" type="submit" >Buy</button>
  
        </form>
  
      </div>
     );
}
 
export default Orderbook;