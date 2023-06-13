import { useState } from "react";

const Viewstatform = (props) => {

    const [stat, setstat] = useState(false);
    const onChange = (event) => {
      const value = event.target.value;
      setstat(value);
    }

    return ( 
        <div className="form-box1">
        <h2>View Statistics </h2>
        <br />
        <form className="userform" action="http://localhost:5000/viewstatform" method="post">
          <div className="inputfield">
            <label>Type </label>
            <select
              type="text"
              name="type"
              required
              onChange={onChange}
            >
              <option value={false} label="Threshold of books">Threshold of books</option>
              <option value={true} label="Sell statistics">Sell statistics</option>
            </select>
          </div>   

          { stat && <div className="inputfield">
            <label>From </label>
            <input
              type="date"
              name="fromdt"
              autoComplete="off"
            />
          </div> }

          { stat && <div className="inputfield">
            <label>To </label>
            <input
              type="date"
              name="todt"
            />
          </div>}   
          
          
          <button className="sgnbutton" type="submit" >View</button>
  
        </form>
  
      </div>
     );
}
 
export default Viewstatform;