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
            <button class="loginbutton" onClick={modalopen}>Login</button>
            {props.openmodal && <Modal setopenmodal={props.setopenmodal} />}
        </div>
     );
}
 
export default LoginButton;