import Buydetails from "./Buydetails";
import "./Css_files/C11.scss"
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import ModalUser from "./ModalUser";
const C23 = () => {
    const [user,setuser] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/get_clerk')
        .then(res => {
            console.log(typeof res)
              return res.json();
        })
        .then(data => {
          console.log(data);
          setuser(data);
          // setcBooks(data);
        })
      },[]);

    const [openmodal, setopenmodal] = useState(false);
    const [now, setnow] = useState();
    function modalopen1()
	{
		setopenmodal(true);
        setnow("addbook")
	}
    function modalopen2()
	{
		setopenmodal(true);
        setnow("verifyorder")
	}
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    function handlemode() {
        document.body.classList.toggle('light-mode');
        // document.getElementById("lplpl").classList.toggle('hg');
        // document.getElementById("lplp1").classList.toggle('hg');
    }
    const [clname, setclname] = useState("");
    function toggleactivestate1() {
        document.getElementById("hm1").classList.toggle('is-active');
        document.getElementById("hm2").classList.toggle('is-active');
        // document.getElementById("hm2").classList.add('is-active');
        // setclname("isactive");
        setshowst("showprofile");
    }
    // function toggleactivestate2() {
    //     document.getElementById("hm1").classList.toggle('is-active');
    //     document.getElementById("hm2").classList.toggle('is-active');
    //     setshowst("showorders");
    // }
    const [showst, setshowst] = useState("showprofile");
    return (
        <div id="C12">
            <div className="video-bg">
                <video width="320" height="240" autoplay loop muted>
                    <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
                    no soportado.
                </video>
            </div>
            <div className="dark-light" onClick={handlemode}>
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            </div>
            <div className="app">
                <div className="header">
                    <div className="menu-circle"></div>
                    <div className="header-menu">
                        {/* <a className="menu-link is-active" onClick={toggleactivestate2} id="hm1">Purchase details</a> */}
                        <a className="menu-link " id="hm2">Profile</a>
                    </div>
                    {/* <div className="search-bar">
                        <form action="http://127.0.0.1:5000/customer/search" method="post">
                            <input type="text" name="book_name" placeholder="Search by name/author" />
                        </form>
                    </div> */}
                    {/* <div className="header-profile">
                        <div className="notification">
                            <span className="notification-number">3</span>
                            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                            </svg>
                        </div>
                        <svg viewBox="0 0 512 512" fill="currentColor">
                            <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
                        </svg>
                        <img className="profile-img" src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
                    </div> */}
                </div>
                <div className="wrapper">
                    <div className="left-side">
                        <div className="side-wrapper">
                            {/* <div className="side-title">Apps</div> */}
                            {/* <div className="side-menu"> */}
                                {/* <a href="#">
                                    <svg viewBox="0 0 512 512">
                                        <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                                        </g>
                                        <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
                                        <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
                                    </svg>
                                    All Apps
                                </a> */}
                                {/* <a href="#">
                                    <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                                        <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                                    </svg>
                                    Updates
                                    <span className="notification-number updates">3</span>
                                </a> */}
                            {/* </div> */}
                        </div>
                        <div className="side-wrapper">
                            <div className="side-title">Features</div>
                            <div className="side-menu">
                                <a onClick={modalopen1}>
                                    <svg viewBox="0 0 512 512" fill="currentColor">
                                        <circle cx="295.099" cy="327.254" r="110.96" transform="rotate(-45 295.062 327.332)" />
                                        <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                                    </svg>
                                    Add Book
                                </a>
                                <a onClick={modalopen2}>
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                        <circle cx="295.099" cy="327.254" r="110.96" transform="rotate(-45 295.062 327.332)" />
                                        <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                                    </svg>                               
                                     Verify Order
                                </a>
                            </div>
                        </div>
                        <div className="side-wrapper">
                            <div className="side-title">Logout</div>
                            <div className="side-menu">
                                <a onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="main-container">
                        <div class="content-wrapper">
                        {/* {showst === "showorders" && <Buydetails />} */}
                        {showst === "showprofile" && user &&  <p><h2>{"Welcome !!"}</h2></p>}
                        {showst === "showprofile" && user &&  <p>{user.FirstName} <span>{user.LastName}</span></p>}
                        {showst === "showprofile" && user &&  <p><h4>{"Position : Clerk"}</h4></p>}
                        {/* {showst === "showprofile" && user &&  <p><span>{"Username : "}</span><span>{user.username}</span></p>} */}
                        </div>


                    </div>
                </div>
                <div className="overlay-app"></div>
            </div>
            {openmodal && <ModalUser setopenmodal={setopenmodal} state={now} />}
            {/* {openmodal && <ModalUser setopenmodal={setopenmodal} state={"rate"} />} */}
        </div>
    );
}

export default C23;