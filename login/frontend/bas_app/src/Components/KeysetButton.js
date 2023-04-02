import ModalUser from "./ModalUser";
import "./Css_files/LoginButton.css"

const AddbookButton = (props) => {
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
	}
    return ( 
        <div>
            <button class="addbook" onClick={modalopen}>Set Keys</button>
            {props.openmodal && <ModalUser setopenmodal={props.setopenmodal} state ={"keyset"} modechangefun={props.setopenmodal}/>}
        </div>
     );
}
 
export default AddbookButton;