import React from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
// const axios = require("axios");
import axios from 'axios';
const Signin1 = () => {
    const location = useLocation();
    function gr()
    {
        // console.log(location.pathname)
    }
    function submitform(){
        // setTimeout(gr,10000)
        axios
        .post("http://localhost:5000/login", {
          uname: 'axc',
          password: '11112222'
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    // function handlesubmit1()
    // {
    //     fetch('http://localhost:5000/login')
    //     .then(res => {
    //         console.log(typeof res)
    //           return res.json();
    //     })
    //     .then(data => {
    //       console.log(data);
    //       setuser(data);
    //       // setcBooks(data);
    //     })
    // }

    return (
        <div>
            <div className="form-box1">
               
                <h2 >Sign In</h2>

                <form className="signin" action='http://localhost:5000/login' method='post'>
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
                    
                    <button className="sgnbutton" type="submit">Login</button>
                </form>
                    {/* <button className="sgnbutton" onClick={submitform}>Login</button> */}
                
            </div>
        </div>
    );
}

export default Signin1;