import {Route, Link, Routes, useLocation} from 'react-router-dom';
import LoginButton from "./LoginButton";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
const Error = (props) => {

    function gr(){
        // console.log("ingr")
        props.seterr();
    }
    useEffect(() => {
        // console.log("onreloading....")
        
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
        <div>
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
     );
}
 
export default Error;