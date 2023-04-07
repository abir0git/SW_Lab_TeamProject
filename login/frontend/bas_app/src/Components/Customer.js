import React, { useState, useEffect } from "react";
import Search from "./Search"
import LogoutButton from "./LogoutButton";
import SearchbookButton from "./SearckbookButton";
import AddqueryButton from "./AddqueryButton";

const Customer = () => {

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

    const [openmodal, setopenmodal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/get_customer')
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

      var username = ""
      if(user)
      {
            username = user.username
      }



    return (

        <div>
            <div>
                Hello, customer you are welcome.
            </div>
            <div>
                {user && <p>{user.FirstName} <span>{user.LastName}</span> <span>{user.username}</span></p>}
            </div>
            {/* <div>
                <SearchButton></SearchButton>
            </div> */}
            <div>
				<SearchbookButton  openmodal={openmodal} setopenmodal={setopenmodal} username={username}></SearchbookButton>
			</div>
            <div>
                <AddqueryButton  openmodal={openmodal} setopenmodal={setopenmodal}></AddqueryButton>
            </div>
            <div>
                <form action="http://127.0.0.1:5000/customer/see_buydetails" method="post">
                    <button type="submit">Buy Details</button>
                </form>
            </div>
            <div>
                <LogoutButton></LogoutButton>
            </div>
        </div>

    );
}

export default Customer;