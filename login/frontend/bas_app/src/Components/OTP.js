const OTP = () => {
    return ( 
        <div >
        <br />
        <form className="OTP" action="http://127.0.0.1:5000/signup/otp" method="post">
          <div className="inputfield">
            <label>OTP: </label>
            <input
              type="text"
              name="OTP"
              required
              autoComplete="off"
            />
          </div>

          <button type="submit" >Verify</button>
  
        </form>
        <form action="http://127.0.0.1:5000/signup/otp/sendotp" method="post">
            <button type="submit">Send otp</button>
        </form>
      </div>

     );
}
 
export default OTP;