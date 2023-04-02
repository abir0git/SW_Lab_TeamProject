import ModalUser from "./ModalUser";
import "./Css_files/LoginButton.css"
import React, { useState, useEffect } from "react";

const ViewstatButton = (props) => {
    const [viewstat, setviewstat] = useState(false)
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
		setviewstat(true);
	}
    return ( 
        <div>
            <button class="addbook" onClick={modalopen}>View Stat</button>
            {props.openmodal && viewstat && <ModalUser setopenmodal={props.setopenmodal} state ={"viewstat"} modechangefun = {setviewstat}/>}
        </div>
     );
}
 
export default ViewstatButton;