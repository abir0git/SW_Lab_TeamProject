import {Route, Link, Routes, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const usePasswordToggle = () => {
    const [visible,setvisible] = useState(false);

    const Icon = (
        <FontAwesomeIcon 
            icon={visible ? "eye-slash" : "eye"} 
            onClick={()=> setvisible(visible => !visible)}
        />
    )

    const inptype = visible ? "text" : "password" ;

    return [inptype , Icon];
}
 
export default usePasswordToggle;