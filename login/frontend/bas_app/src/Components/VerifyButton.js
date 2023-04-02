import ModalUser from "./ModalUser";
import React, { useState, useEffect } from "react";
import "./Css_files/LoginButton.css"

const VerifyButton = (props) => {
    const [verifybook, setverifybook] = useState(false)
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
        setverifybook(true);
	}
    // const [state, changstate] = useState("searchbook")
    return ( 
        <div>
            <button onClick={modalopen}>Verify Order</button>
            {props.openmodal && verifybook && <ModalUser setopenmodal={props.setopenmodal} state={"verifyorder"} modechangefun = {setverifybook}/>}
        </div>
     );
}
 
export default VerifyButton;