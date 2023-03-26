import Modal from "./Modal";
const LoginButton = (props) => {
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
	}
    return ( 
        <div>
            <button onClick={modalopen}>Login</button>
            {props.openmodal && <Modal setopenmodal={props.setopenmodal} />}
        </div>
     );
}
 
export default LoginButton;