import ModalUser from "./ModalUser";
import React, { useState, useEffect } from "react";
import "./Css_files/LoginButton.css"

const VerifyButton = (props) => {
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
	}
    // const [state, changstate] = useState("searchbook")
    return ( 
        <div>
            <button class="searchbook" onClick={modalopen}>Verify Order</button>
            {props.openmodal && <ModalUser setopenmodal={props.setopenmodal} state={"verifyorder"}/>}
        </div>
     );
}
 
export default VerifyButton;