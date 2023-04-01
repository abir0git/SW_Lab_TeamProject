const Signin1 = () => {
    return (
        <div>
            <div className="form-box1">

                <h2>Sign In</h2>

                <form className="signin" action="http://localhost:5000/login" method="post" >
                    <div className="inputfield">
                        <span></span><label>Username:</label>
                        <input
                            name="uname"
                            type="text"
                            required
                        />
                    </div>
                    

                    <div className="inputfield">
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            required
                        />


                    </div>
                    
                    <button className="sgnbutton" type="submit" >Login</button>
                </form>
                
            </div>
        </div>
    );
}

export default Signin1;