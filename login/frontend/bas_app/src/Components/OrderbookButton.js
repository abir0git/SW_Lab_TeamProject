import ModalUser from "./ModalUser";
import "./Css_files/LoginButton.css"

const OrderbookButton = (props) => {
    function modalopen()
	{
        console.log("123");
		props.setopenmodal(true);
	}
    return ( 
        <div>
            <button class="sgnbuttonm" onClick={modalopen}>Order Book</button>
            {props.openmodal && <ModalUser setopenmodal={props.setopenmodal} state ={"orderbook"} username={props.username}/>}
        </div>
     );
}
 
export default OrderbookButton;