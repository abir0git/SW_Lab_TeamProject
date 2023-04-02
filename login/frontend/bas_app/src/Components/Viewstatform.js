const Viewstat = (props) => {

    return ( 
        <div className="form-box1">
        <h2>View Statistics </h2>
        <br />
        <form className="userform" action="http://localhost:5000/viewstat" method="post">
          <div className="inputfield">
            <label>From </label>
            <input
              type="date"
              name="fromdt"
              required
              autoComplete="off"
            />
          </div>

          <div className="inputfield">
            <label>To </label>
            <input
              type="date"
              name="todt"
              required
            />
          </div>   
          
          <div className="inputfield">
            <label>Type </label>
            <input
              type="text"
              name="type"
              required
              placeholder="Enter overall or an ISBN"
            />
          </div>   
          
          <button className="sgnbutton" type="submit" >View</button>
  
        </form>
  
      </div>
     );
}
 
export default Viewstat;