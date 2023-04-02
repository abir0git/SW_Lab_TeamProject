import ModalUser from "./ModalUser";
import React, { useState, useEffect } from "react";
import "./Css_files/LoginButton.css"

const SearchbookButton = (props) => {
    const [searchbook, setsearchbook] = useState(false)
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
        setsearchbook(true);
	}
    // const [state, changstate] = useState("searchbook")
    return ( 
        <div>
            <button class="searchbook" onClick={modalopen}>Search Book</button>
            {props.openmodal && searchbook && <ModalUser setopenmodal={props.setopenmodal} state={"searchbook"} username={props.username} modechangefun={setsearchbook} />}
        </div>
     );
}
 
export default SearchbookButton;