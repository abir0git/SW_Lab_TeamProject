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
            <button class="addbook" onClick={modalopen}>Add Book</button>
            {props.openmodal && <ModalUser setopenmodal={props.setopenmodal} state ={"addbook"}/>}
        </div>
     );
}
 
export default AddbookButton;