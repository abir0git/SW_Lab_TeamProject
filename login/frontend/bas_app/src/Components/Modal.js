import SignIn from "./Signin";
import SignUp from "./Signup";
import SignUp1 from "./Signup1";
import React, { useState, useEffect } from "react";

const Modal = (props) => {

    const [active, setActive] = useState("signin");
    function modalclose()
	{
        console.log("1222");
		props.setopenmodal(false);
        setActive("signin");
	}
    const Modal = () => {
        if (active === "signin") {
            return <div id='signinm'><SignIn  />

                <h4>Don't have an account? <span onClick={() => { setActive("signup") }}>Sign Up</span></h4>
                <h4 id="fp" onClick={() => { setActive("forgot1") }}>Forgot Password?</h4>
            </div>
        }
        else if (active === "signup") {
            return <div id="signupm">
                <SignUp  />

                <h4>Already have an account? <span onClick={() => { setActive("signin") }}> Sign In</span></h4>
                <br />

            </div>
        }
        else if (active === "forgot1") {
            return <div className="forgot1m">
                {/* <Forgot /> */}

            </div>
        }
        else if (active === "forgot2") {
            return <div className="forgot2m">
                {/* <Forgot2  /> */}

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

                <Modal />


            </div>
        </div>
    );
}

export default Modal;