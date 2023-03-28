import React, { useState, useEffect } from "react";
const Profile = () => {


    

    useEffect(() => {
        fetch("http://localhost:5000/get_user").then((response)=> response.json)
    .then((json)=> console.log(json));
      });

    return ( 
        <div>HELLO USER</div>
     );
}
 
export default Profile;