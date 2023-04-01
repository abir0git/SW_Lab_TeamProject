import Search from "./Search";
import Addbook from "./Addbook";
import Keyset from "./Keyset";

import React, { useState, useEffect } from "react";

const ModalUser = (props) => {

    const [active, setActive] = useState("searchbook");
    function modalclose()
	{
        console.log("1222");
		props.setopenmodal(false);
        setActive("searchbook");
	}
    useEffect(()=>{
		setActive(props.state);
	}, [])

    const ModalUser = () => {
        if (active === "searchbook") {
            return <div id='searchbook'><Search  />
            </div>
        }
        else if (active === "addbook") {
            return <div id="addbook">
                <Addbook/>
            </div>
        }
        else if (active === "keyset") {
            return <div id="keyset">
                <Keyset/>
            </div>
        }
    }

    return (
        <div className="sgnmodalBackground" >
            <div className="sgnmodalContainer">
                <div className="sgnmodalclose">
                    <button
                        onClick={() => {
                            props.setopenmodal(false);
                        }}
                    >
                        X
                    </button>

                </div>

                <ModalUser />


            </div>
        </div>
    );
}

export default ModalUser;