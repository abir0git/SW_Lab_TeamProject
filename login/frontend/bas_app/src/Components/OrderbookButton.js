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
            <button class="sgnbuttonm" onClick={modalopen}>Order Book</button>
            {props.openmodal && <ModalUser setopenmodal={props.setopenmodal} state ={"orderbook"}/>}
        </div>
     );
}
 
export default AddbookButton;