import ModalUser from "./ModalUser";
import React, { useState, useEffect } from "react";
import "./Css_files/LoginButton.css"

const AddqueryButton = (props) => {
    const [addquery, setaddquery] = useState(false);
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
        setaddquery(true);
	}
    // const [state, changstate] = useState("searchbook")
    return ( 
        <div>
            <button class="addquery" onClick={modalopen}>Add Query</button>
            {props.openmodal && addquery && <ModalUser setopenmodal={props.setopenmodal} state={"addquery"} modechangefun={setaddquery} />}
        </div>
     );
}
 
export default AddqueryButton;