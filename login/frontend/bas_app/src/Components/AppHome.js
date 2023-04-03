import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import React from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import LoginButton from "./LoginButton";
import Modal from "./Modal";

const AppHome = (props) => {
    const location = useLocation();
    const [item, setitem] = useState();
    // this.state = {
    //     items: [],
    //     DataisLoaded: false
    //     };

    const [openmodal, setopenmodal] = useState(false);
    // const [err, seterr] = useState();
    function gr(){
        console.log("ingr")
        props.seterr();
    }
    useEffect(() => {
        console.log("onreloading....")
        
        fetch('http://localhost:5000/get_err')
            .then(res => {
                // console.log(typeof res)
                return res.json();
            })
            .then(data => {
                console.log(data);
                // alert("Hello! I am an alert box!!");
                props.seterr(data);
                setTimeout(gr,3000)
                // console.log(data.Error)
            })
    },[]);

    return (

        <div className="apphome">
            <div className="appbutton">
                <LoginButton openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
            </div>
            <div>
                <h1>
                    Book-Shop Automation Software
                </h1>
            </div>
            <div>
                {/* {err && err.Error == "Wrong Password" && <Modal openmodal={openmodal} setopenmodal={setopenmodal} errmessage = {err.Error} />} */}
                {props.err && props.err.Error === "Wrong Password" && <div className="sgnmodalBackground" >
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
                </div>}
            </div>
        </div>

    );
}

export default AppHome;