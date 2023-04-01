const Keyset = () => {
    return ( 
        <div >
        <h2>Set Keys </h2>
        <br />
        <form className="keyset" action="http://localhost:5000/owner/keyset" method="post">
          <div className="inputfield">
            <label>Clerk Key: </label>
            <input
              type="text"
              name="clerk_key"
              required
              autoComplete="off"
            />
          </div>

          <div className="inputfield">
            <label>Manager Key: </label>
            <input
              type="text"
              name="manager_key"
              required
            />
          </div>  
          
          <div className="inputfield">
            <label>Owner Key: </label>
            <input
              type="text"
              name="owner_key"
              required
            />
          </div>  
  
          <button type="submit" >Save</button>
  
        </form>
  
      </div>
     );
}
 
export default Keyset;