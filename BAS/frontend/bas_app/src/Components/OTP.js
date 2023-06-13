const OTP = () => {
    return ( 
      <div className="form-box2">
      <h2>Please click on Send OTP button and Enter OTP send to your mail(Check spam also) </h2>
        <br />
        <form className="userform2" action="http://127.0.0.1:5000/signup/otp" method="post">
          <div className="inputfield2">
            <label className="label-2">OTP: </label>
            <input
              type="text"
              name="OTP"
              required
              autoComplete="off"
            />
          </div>

          <button class="sgnbutton2" type="submit" >Verify</button>
  
        </form>
        <form className="userform2" action="http://127.0.0.1:5000/signup/otp/sendotp" method="post">
            <button class="sgnbutton2" type="submit">Send OTP</button>
        </form>
      </div>

     );
}
 
export default OTP;