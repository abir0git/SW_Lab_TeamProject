import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");    
  };

  return <button onClick={handleClick}>Logout</button>
}

export default LogoutButton;