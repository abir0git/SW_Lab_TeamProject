const Verifyform = () => {

    return ( 
        <div className="form-box1">
        <h2>Verify order</h2>
        <br />
        <form className="userform" action="http://localhost:5000/clerk/seeverifybook" method="post">
          <div className="inputfield">
            <label>Customer's username </label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
            />
          </div>   
          
          <button className="sgnbutton" type="submit" >View</button>
  
        </form>
  
      </div>
     );
}
 
export default Verifyform;