import {Route, Link, Routes, useLocation} from 'react-router-dom';
import LoginButton from "./LoginButton";
import Modal from "./Modal";
import Modal1 from "./Modal1";
import React, { useState, useEffect } from "react";
import Error from './Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import usePasswordToggle from './usePasswordToggle';

const AppHome1 = (props) => {
    const [PasswordInpTy , ToggleIcon] = usePasswordToggle();
    const location = useLocation();
    const [item, setitem] = useState();
    const [openmodal, setopenmodal] = useState(false);
    const [sstate,setsstate] = useState("signup")
    // function gr(){
    //     console.log("ingr")
    //     props.seterr();
    // }
    function modalopen(){
        setopenmodal(true);
    }
    // useEffect(() => {
    //     // console.log("onreloading....")
        
    //     fetch('http://localhost:5000/get_err')
    //         .then(res => {
    //             // console.log(typeof res)
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             // alert("Hello! I am an alert box!!");
    //             props.seterr(data);
    //             setTimeout(gr,3000)
    //             // console.log(data.Error)
    //         })
    // },[]);
    return (
        <div>
            <div class="fullcontent">
                <div class="headings">
                    <h1>My Book-Shop Automation Software</h1>
                    <h2>A great place to explore!!</h2>
                </div>
                <div class="formbox">
                    <h3>Log In</h3>
                    <form id="form" action="http://localhost:5000/login" method="post">
                        <label for="">Username</label>
                        <input type="text" name="uname" className="asd" />
                        <label for="">Password</label>
                        <div id='pwf'><input type={PasswordInpTy} id="" name="password" className="asd" />
                        <div id='tcon'>{ToggleIcon}</div> </div>
                        <input id="btn" type="submit" name="submit" value="Log In" className="mainbox" />
                        <label for="">New customer?</label>
                        {/* <i>mmm</i> */}
                    </form>
                        <button className="mainbox" onClick={modalopen}>Register Now</button>
                </div>
                        {openmodal && <Modal1 setopenmodal={setopenmodal} openmodal={openmodal} sstate={sstate} />}
                <div>
                {/* {err && err.Error == "Wrong Password" && <Modal openmodal={openmodal} setopenmodal={setopenmodal} errmessage = {err.Error} />} */}
                {/* {props.err && props.err.Error === "Wrong Password" && <div className="sgnmodalBackground" >
                    <div className="sgnmodalContainer">
                        <div className="sgnmodalclose">
                            <button
                                onClick={() => {
                                    console.log(props.err);
                                    props.seterr();
                                }}
                            >
                                X
                            </button>

                        </div>

                        <div className="Errmsg">
                            {props.err.Error}
                        </div>
                    </div>
                </div>} */}
                <Error err={props.err} seterr={props.seterr} />
            </div>
            </div>

        </div>
    );
}

export default AppHome1;