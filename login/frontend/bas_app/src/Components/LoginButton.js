const LoginButton = (props) => {
    function modalopen()
	{
		props.setopenmodal(true);
	}
    return ( 
        <div>
            <button onClick={modalopen}>Login</button>
            {setopenmodal && <div></div>}
        </div>
     );
}
 
export default LoginButton;