import React, { useState, useEffect } from "react";
import Addbook from "./Addbook"
import AddbookButton from "./AddbookButton"
import LogoutButton from "./LogoutButton"
import VerifyButton from "./VerifyButton";

const Clerk = () => {

    const[item,setitem] = useState();
    // this.state = {
    //     items: [],
    //     DataisLoaded: false
    //     };
        
    const [user,setuser] = useState();
    // useEffect(() => {
    //     const res = fetch("http://localhost:5000/get_user11");
    //     console.log(res);
    //   },[]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/get_user11").then((response)=> response.json)
    // .then((json)=> 
    // {
    //     console.log(json);
    //     setitem(json);
    // })
    //   },[]);

    // useEffect(()=>{
    //     fetch("http://localhost:5000/get_user11")
    // },[]);

    // fetch(
    //     "http://localhost:5000/get_user11")
    //     .then((res) => res.json())
    //     .then((json) => {
    //         this.setState({
    //             items: json,
    //             DataisLoaded: true
    //         });
    //     })


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

    const [openmodal, setopenmodal] = useState(false)
    const [clerkstate, setclerkstate] = useState(1)

    return (

        <div>
            <div>
                Hello, Clerk you are onduty.
            </div>
            {/* <div>
                {user.map((item4) => (
                    <ol key={item4.id} >
                        First_Name: {item4.FirstName},
                        Last_Name: {item4.LastName}
                    </ol>
                ))}
            </div> */}
            <div>
                {user && <p>{user.FirstName} <span>{user.LastName}</span></p>}
            </div>
            <div>
                <AddbookButton openmodal={openmodal} setopenmodal={setopenmodal}></AddbookButton>
            </div>
            <div>
                <VerifyButton openmodal={openmodal} setopenmodal={setopenmodal}></VerifyButton>
            </div>
            <div>
                <LogoutButton></LogoutButton>
            </div>
        </div>

    );
}

export default Clerk;