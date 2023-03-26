const Signup1 = () => {
    return ( 
        <div className="form-box">
        <h2>SignUp </h2>
        <br />
        <form className="signup" action="http://localhost:5000/signup" method="post">
          <div className="inputfield">
            <label>First-Name </label>
            <input
              type="text"
              name="fname"
              required
              autoComplete="off"
            />
  
  
          </div>

          <div className="inputfield">
            <label>Last-Name </label>
            <input
              type="text"
              name="lname"
              required
            />
  
  
          </div>
  
          
  
          <div className="inputfield">
            <label>UserName </label>
            <input
              type="text"
              name="uname"
              required
            />
  
  
          </div>
  
          <div className="inputfield">
            <label>Email </label>
            <input
              type="email"
              name="email"  
              required
            />
  
  
          </div>
  
  
          <div className="inputfield">
            <label>Phone Number</label>
            <input
              type="tel"
              name="mobile"
              required
            />
  
  
          </div> 
  
          <div className="inputfield sel">
            <label>City</label>
            <input
              type="text"
              name="city"
              required
            >
  
            </input>
  
  
          </div>
          <br />
  
          <div className="inputfield sel">
            <label>State</label>
            <input
              type="text"
              name="state"
              required
            >
  
            </input>  
          </div>
  
          <div className="inputfield sel">
            <label>Address</label>
            <input
              type="text"
              name="adr"
              required
            >
  
            </input>
  
  
          </div>
  
          <div className="inputfield sel">
            <label>Gender </label>
            <select
              type="text"
              name="gender"
              required
            >
              <option value="" label="Select your Gender">Select your Gender</option>
              <option value="M" label="Male">Male</option>
              <option value="F" label="Female">Female</option>
              <option value="Other" label="Other">Other</option>
            </select>
  
          </div>
  
  
          <div className="inputfield sel">
            <label>Who are you? </label>
            <select
              type="text"
              name="usty"
              required
            >
              <option value="" label="Select">Select</option>
              <option value="1" label="Owner">Owner</option>
              <option value="2" label="Employee">Employee</option>
              <option value="3" label="Customer">Customer</option>
            </select>
  
          </div>
  
  
  
          <div className="inputfield">
            <label>Password </label>
            <input
              type="password"
              name="password"
              required
            />
  
            <div className="underline"></div>
          </div>
  
  
  
          <div className="inputfield">
            <label>Confirm Password </label>
            <input
              type="password"
              name="cPassword"
              autoComplete="on"
              required
            />
  
            <div className="underline"></div>
          </div>
  
  
          <button className="sgnbutton" type="submit" >Submit</button>
  
        </form>
  
      </div>
     );
}
 
export default Signup1;