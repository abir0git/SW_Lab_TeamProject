import Modal from "./Modal";
import "./Css_files/LoginButton.css"
const LoginButton = (props) => {
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
	}
    return ( 
        <div>
            <button className="loginbutton" onClick={modalopen}>Login</button>
            {/* {props.openmodal && <Modal setopenmodal={props.setopenmodal} openmodal={props.openmodal} />} */}
        </div>
     );
}
 
export default LoginButton;