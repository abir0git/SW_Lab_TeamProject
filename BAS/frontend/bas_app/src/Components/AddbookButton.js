import ModalUser from "./ModalUser";
import "./Css_files/LoginButton.css"
import React, { useState, useEffect } from "react";

const AddbookButton = (props) => {
    const [addbook, setaddbook] = useState(false)
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
		setaddbook(true);
	}
    return ( 
        <div>
            <button className="addbook" onClick={modalopen}>Add Book</button>
            {props.openmodal && addbook && <ModalUser setopenmodal={props.setopenmodal} state ={"addbook"} modechangefun = {setaddbook}/>}
        </div>
     );
}
 
export default AddbookButton;