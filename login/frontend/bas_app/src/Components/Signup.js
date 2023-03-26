import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "./SignUp.css";
// import data from "./city.json"
// var Recaptcha = require("react-recaptcha");
const axios = require("axios");

const SignUp = (props) => {
  const [btnText, setbtnText] = useState("Sign Up");
  const [statecity, setStatecity] = useState([])
  const [captcha, setCaptcha] = useState("");
  //   function calculateAge(birthday) {
  //     var ageDifMs = Date.now() - birthday;
  //     var ageDate = new Date(ageDifMs); // miliseconds from epoch
  //     console.log(Math.abs(ageDate.getUTCFullYear()-1970))
  //     return Math.abs(ageDate.getUTCFullYear()-1970);
  // }
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      uname: "",
      email: "",
      usty: "",
      adr: "",
      password: "",
      cPassword: "",
      mobile: "",
      city: "",
      state: "",
      gender: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .required("Required"),
      lname: Yup.string()
        .required("Required"),
      uname: Yup.string()
        .required("Required"),
      usty: Yup.string()
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      mobile: Yup.number()
        .min(1000000000, "Inalid Phone Number")
        .max(9999999999, "Inalid Phone Number")
        .typeError("Inalid Phone Number")
        .integer("Inalid Phone Number")
        .required("Required"),
      gender: Yup.string()
        .required("Required"),
      adr: Yup.string()
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .required("Required"),
      cPassword: Yup.string()
        .min(8, "Password msut be 8 chracters long")
        .required("Required")
        .oneOf([Yup.ref('password'), null], 'Password does not match'),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      //console.log('hel')
      setbtnText("Signing up...");
      const req = {
        fname: values.fname,
        lname: values.lname,
        uname: values.uname,
        usty: values.usty,
        adr: values.adr,
        email: values.email,
        password: values.password,
        mobile: values.mobile,
        city: values.city,
        state: values.state,
        gender: values.gender,
      }
      console.log(req);
      axios
        .post("http://localhost:5000/signup", req)
        .then(function (response) {
          console.log("hel1l")
          console.log(response);
          setbtnText("Sign Up");
        })
        .catch(function (error) {
          console.log(error);
          props.showToast(true, "Unable to Sign Up", "Unsuccessful")
          setbtnText("Sign Up");
        });

    },
  });


  return (
    <div className="form-box">
      <h2>SignUp </h2>
      <br />
      <form onSubmit={formik.handleSubmit} className="signup">
        <div className="inputfield">
          <label>First-Name </label>
          <input
            type="text"
            name="fname"
            required
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />


        </div>

        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <div className="inputfield">
          <label>Last-Name </label>
          <input
            type="text"
            name="lname"
            required
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />


        </div>

        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <div className="inputfield">
          <label>UserName </label>
          <input
            type="text"
            name="uname"
            required
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />


        </div>

        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <div className="inputfield">
          <label>Email </label>
          <input
            type="email"
            name="email"

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
        <br />

        <div className="inputfield">
          <label>Phone Number</label>
          <input
            type="tel"
            name="mobile"
            required
            autoComplete="off"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />


        </div>

        {formik.touched.mobile && formik.errors.mobile ? (
          <p>{formik.errors.mobile}</p>
        ) : null}
        <br />



        <div className="inputfield sel">
          <label>City</label>
          <input
            type="text"
            name="city"
            required
            autoComplete="off"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={
              formik.handleBlur
            }
          >

          </input>


        </div>

        {formik.touched.state && formik.errors.state ? (
          <p>{formik.errors.state}</p>
        ) : null}
        <br />

        <div className="inputfield sel">
          <label>State</label>
          <input
            type="text"
            name="state"
            required
            autoComplete="off"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={
              formik.handleBlur
            }
          >

          </input>


        </div>

        {formik.touched.state && formik.errors.state ? (
          <p>{formik.errors.state}</p>
        ) : null}
        <br />

        <div className="inputfield sel">
          <label>Address</label>
          <input
            type="text"
            name="adr"
            required
            autoComplete="off"
            value={formik.values.adr}
            onChange={formik.handleChange}
            onBlur={
              formik.handleBlur
            }
          >

          </input>


        </div>

        {formik.touched.state && formik.errors.state ? (
          <p>{formik.errors.state}</p>
        ) : null}
        <br />



        <div className="inputfield sel">
          <label>Gender </label>
          <select
            type="text"
            name="gender"
            required
            autoComplete="off"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select your Gender">Select your Gender</option>
            <option value="M" label="Male">Male</option>
            <option value="F" label="Female">Female</option>
            <option value="Other" label="Other">Other</option>
          </select>

        </div>

        {formik.touched.gender && formik.errors.gender ? (
          <p>{formik.errors.gender}</p>
        ) : null}
        <br />

        <div className="inputfield sel">
          <label>Who are you? </label>
          <select
            type="text"
            name="usty"
            required
            autoComplete="off"
            value={formik.values.usty}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select">Select</option>
            <option value="1" label="Owner">Owner</option>
            <option value="2" label="Employee">Employee</option>
            <option value="3" label="Customer">Customer</option>
          </select>

        </div>

        {formik.touched.gender && formik.errors.gender ? (
          <p>{formik.errors.gender}</p>
        ) : null}
        <br />



        <div className="inputfield">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="on"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className="underline"></div>
        </div>


        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        <br />

        <div className="inputfield">
          <label>Confirm Password </label>
          <input
            type="password"
            name="cPassword"
            autoComplete="on"
            required
            value={formik.values.cPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className="underline"></div>
        </div>

        {formik.touched.cPassword && formik.errors.cPassword ? (
          <p>{formik.errors.cPassword}</p>
        ) : null}
        <br />

        <button className="sgnbutton" type="submit" >{btnText}</button>

      </form>

    </div>
  );
};

export default SignUp;
