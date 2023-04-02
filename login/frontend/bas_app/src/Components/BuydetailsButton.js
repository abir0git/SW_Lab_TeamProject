import ModalUser from "./ModalUser";
import React, { useState, useEffect } from "react";
import "./Css_files/LoginButton.css"

const BuydetailsButton = (props) => {
    const [buydetails, setbuydetails] = useState(false);
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
        setbuydetails(true);
	}
    // const [state, changstate] = useState("searchbook")
    return ( 
        <div>
            <button class="addquery" onClick={modalopen}>Buy Details</button>
            {props.openmodal && buydetails && <ModalUser setopenmodal={props.setopenmodal} state={"buydetails"} modechangefun={setbuydetails} />}
        </div>
     );
}
 
export default BuydetailsButton;