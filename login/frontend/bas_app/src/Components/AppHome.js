import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

const AppHome = () => {

    const[item,setitem] = useState();
    // this.state = {
    //     items: [],
    //     DataisLoaded: false
    //     };
        
    const [openmodal, setopenmodal] = useState(false);

    return (

        <div>
            <div>
                <LoginButton openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
            </div>
            <div>
            <h1>
                Welcome to BAS
            </h1>
            </div>
        </div>

    );
}

export default AppHome;