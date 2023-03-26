import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './SignIn.css';
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
const axios = require("axios");
function SignIn (props) {
  const [btnText, setbtnText] = useState("Sign In")
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(6, "Password length must be greater than 6 letters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setbtnText("Signing in...");
      axios
        .post("https://mainapi.springfest.in/api/user/login/password", {
          email: formik.values.email,
          password: formik.values.password,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.code == 0) {
            localStorage.setItem("data", JSON.stringify(response.data));
            console.log("success");
            props.showToast(true,"Successfully Logged In","Success")
            localStorage.setItem('logstat',true)
            props.setOpenModal(false);
            axios
              .post(
                "https://mainapi.springfest.in/api/user/get_registered_events",
                {
                  token: response.data.message.token,
                }
              )
              .then(function (data) {
                localStorage.setItem(
                  "registered-event",
                  JSON.stringify(data.data)
                );
              })
          } else {
            props.showToast(true,response.data.message,"Unsuccessful")
          }
          setbtnText("Sign In");
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          props.showToast(true,"Unable to Sign In","Unsuccessful")
          setbtnText("Sign In");
        });
    },
  });

  return (

    
     <>
     <div className="form-box1">
      
      <h2>Sign In</h2>
      
      <form className="signin" onSubmit={formik.handleSubmit}>
        <div className="inputfield">
        <span><FaIcons.FaUserTie/></span><label>Email:</label>
          <input
            name="email"
            type="email"
            required
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        
        
        <div className="inputfield">
        <span><RiIcons.RiLockPasswordFill/></span><label>Password:</label>
          <input
            name="password"
            type="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        
        <br/>
        <button className="sgnbutton" type="submit" >{btnText}</button>
      </form>
      
    </div>
    

     </> 
    

  );
};

export default SignIn;
