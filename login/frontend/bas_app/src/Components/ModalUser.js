import Search from "./Search";
import Addbook from "./Addbook";
import Keyset from "./Keyset";
import Orderbook from "./Orderbook";
import Verifyform from "./Verifyform";
import Addquery from "./Addquery";
import Viewstat from "./Viewstatform";

import React, { useState, useEffect } from "react";

const ModalUser = (props) => {

    const [active, setActive] = useState("searchbook");
    function modalclose()
	{
        console.log("1222");
		props.setopenmodal(false);
        setActive("searchbook");
	}
    console.log(props.state)
    useEffect(()=>{
		setActive(props.state);
	}, [])
    
    const ModalUser = () => {
        if (active === "searchbook") {
            return <div id='searchbook'><Search/>
            </div>
        }
        else if (active === "keyset") {
            return <div id="keyset">
                <Keyset/>
            </div>
        }
        else if (active === "orderbook") {
            return <div id="orderbook">
                <Orderbook/>
            </div>
        }
        else if (active === "verifyorder") {
            return <div id="verifyorder">
                <Verifyform/>
            </div>
        }
        else if (active === "addbook") {
            return <div id="addbook">
                <Addbook/>
            </div>
        }
        else if (active === "addquery") {
            return <div id="addquery">
                <Addquery/>
            </div>
        }
        else if (active === "viewstat") {
            return <div id="viewstat">
                <Viewstat/>
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
                            if(!(active === "addquery")) props.modechangefun(false);
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