import React, {useState,useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import data from "./city.json"
var Recaptcha = require("react-recaptcha");
const axios = require("axios");

const SignUp = (props) => {
  const [btnText, setbtnText] = useState("Sign Up");
  const [statecity, setStatecity] = useState([])
  const [captcha, setCaptcha]= useState("");
  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(Math.abs(ageDate.getUTCFullYear()-1970))
    return Math.abs(ageDate.getUTCFullYear()-1970);
}
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
      mobile: "",
      college: "",
      city: "",
      state: "",
      dob: "",
      gender: "",
      yop: "",
      security_qn: "",
      security_ans: "",
      captcha:"",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      mobile: Yup.number()
        .min(1000000000,"Inalid Phone Number")
        .max(9999999999,"Inalid Phone Number")
        .typeError("Inalid Phone Number")
        .integer("Inalid Phone Number")
        .required("Required"),
      college: Yup.string()
        .required("Required")
        .matches(/^[',0-9a-zA-Z\s,-]+$/, "Invalid College Name"),
      dob: Yup.string()
        .test("dob","You must be older than 16 years to register.",function(dob) {
          return calculateAge(new Date(dob)) > 16;
      })
        .required("Required"),
      gender: Yup.string()
        .required("Required"),
      yop: Yup.number()
        .required("Required")
        .typeError("Invalid Input")
        .integer("Invalid Input")
        .max(2029,"Invalid Input")
        .min(2023,"Invalid Input"),
      security_qn: Yup.string()
        .required("Required")
        .matches(/^[?,0-9a-zA-Z\s,-]+$/, "Field cannot contain Special Characteres"), 
      security_ans: Yup.string()
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .required("Required"),
      cPassword: Yup.string()
        .min(8, "Password msut be 8 chracters long")
        .required("Required")
        .oneOf([Yup.ref('password'), null], 'Password does not match'),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        captcha: Yup.mixed().required("Captcha Required")
    }),
    onSubmit: (values) => {
      //console.log('hel')
      setbtnText("Signing up...");
      const req = {
          name: values.name,
          email: values.email,
          password: values.password,
          mobile: values.mobile,
          college: values.college,
          city: values.city,
          state: values.state,
          dob: values.dob,
          gender: values.gender,
          yop: values.yop,
          security_qn: values.security_qn,
          security_ans: values.security_ans,
          captcha: captcha,
      }
      console.log(req);
      axios
        .post("https://mainapi.springfest.in/api/user/register_user", req)
        .then(function (response) {
          console.log(response);
          if (response.data.code === 0) {
            localStorage.setItem("data", JSON.stringify(response.data));
            console.log("success");
            localStorage.setItem('logstat',true)
            props.showToast(true,"Successfully Signed Up","Success")
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

          } else if (response.data.code===-1){
            if(response.data.message.email){
            props.showToast(true,response.data.message.email,"Unsuccessful")
            }
            else if(response.data.message.phone){
              props.showToast(true,response.data.message.phone,"Unsuccessful")
            }else if(response.data.message.name){
            props.showToast(true,response.data.message.name,"Unsuccessful")
            }else if(response.data.message.security_qn){
            props.showToast(true,response.data.message.security_qn,"Unsuccessful")
            }else if(response.data.message.security_ans){
            props.showToast(true,response.data.message.security_ans,"Unsuccessful")
            }else if(response.data.message.dob){
            props.showToast(true,response.data.message.dob,"Unsuccessful")
            }else if(response.data.message.gender){
            props.showToast(true,response.data.message.gender,"Unsuccessful")
            }else if(response.data.message.college){
            props.showToast(true,response.data.message.college,"Unsuccessful")
            }else if(response.data.message.yop){
            props.showToast(true,response.data.message.yop,"Unsuccessful")
            }else if(response.data.message.mobile){
            props.showToast(true,response.data.message.mobile,"Unsuccessful")
            }else if(response.data.message.city){
            props.showToast(true,response.data.message.city,"Unsuccessful")
            }else if(response.data.message.state){
            props.showToast(true,response.data.message.state,"Unsuccessful")
            }else if(response.data.message.captcha){
            props.showToast(true,response.data.message.captcha,"Unsuccessful")
            }
          setbtnText("Sign Up");
          }else{
            props.showToast(true,response.data.message,"Unsuccessful");          }
            setbtnText("Sign Up");
        })
        .catch(function (error) {
          console.log(error);
          props.showToast(true,"Unable to Sign Up","Unsuccessful")
          setbtnText("Sign Up");
        });
      
    },
  });
  useEffect(() => {
    data.states.forEach(element => {
      
      if(formik.values.state==element.state) {
        setStatecity(element.districts)
      } 
    });
  
  }, [formik.values.state])
  
  return (
    <div className="form-box">
      <h2>SignUp </h2>
      <br/>
      <form onSubmit={formik.handleSubmit} className="signup">
        <div className="inputfield">
        <label>Name </label>
          <input
            type="text"
            name="name"
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
        <label>Mobile Number</label>
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

        <div className="inputfield">
        <label>College</label>
          <input
            type="text"
            name="college"
            required
            autoComplete="off"
            value={formik.values.college}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          
        </div>

        {formik.touched.college && formik.errors.college ? (
          <p>{formik.errors.college}</p>
        ) : null}
        <br />

        <div className="inputfield sel">
        <label>State</label>
          <select
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
          <option value="" unselectable="true" label="Select your State">Select your State</option>
          {
            data.states.map((e)=>{const districts=e.districts
              return(<option value={e.state} label={e.state}>{e.state}</option>)})
}
          </select>
          
          
        </div>

        {formik.touched.state && formik.errors.state ? (
          <p>{formik.errors.state}</p>
        ) : null}
        <br />
        <div className="inputfield sel">
        <label>City </label>
          <select
            
            name="city"
            required
            autoComplete="off"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          <option value="" label="Select your City" unselectable="true">Select your City</option>
    
          {/* {data.states.map((e)=>{
            console.log("hell")
            return(e.state==state?e.districts.map((ele)=>{
              return(<option value={ele} label={ele}>{ele}</option>)
            }):""
)})} */}
{
  statecity.map(ele=>{
    return(<option value={ele} label={ele}>{ele}</option>)
  })
}
          </select>
          
          
        </div>

        {formik.touched.city && formik.errors.city ? (
          <p>{formik.errors.city}</p>
        ) : null}
        <br />

        

        <div className="inputfield calender" onClick={()=>{
          document.getElementById("datepicker-signup").showPicker()
}}>
          <label htmlFor="dob">Date of Birth </label>
          <input
            type="date"
            name="dob"
            required
            autoComplete="off"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='dateinput'
            id="datepicker-signup"
          />
          
          
        </div>

        {formik.touched.dob && formik.errors.dob ? (
          <p>{formik.errors.dob}</p>
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

        <div className="inputfield">
         <label>Year of Passing </label>
          <select
            type="text"
            name="yop"
            required
            autoComplete="off"
            value={formik.values.yop}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select Year Of Passing ">Select Year Of Passing</option>
            <option value="2023" label="2023">2023</option>
            <option value="2024" label="2024">2024</option>
            <option value="2025" label="2025">2025</option>
            <option value="2026" label="2026">2026</option>
            <option value="2027" label="2027">2027</option>
            <option value="2028" label="2028">2028</option>
            <option value="2029" label="2029">2029</option>
          </select>
          
          <div className="underline"></div>
        </div>

        {formik.touched.yop && formik.errors.yop ? (
          <p>{formik.errors.yop}</p>
        ) : null}
        <br />
        <div className="inputfield sel">
        <label>Security Question </label>
          <input
            type="text"
            name="security_qn"
            required
            autoComplete="off"
            value={formik.values.security_qn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {/* <option value="Select your Security Question" label="Security Question"></option>
               <option value="A" label="A"></option>
               <option value="B" label="B"></option>
               <option value="C" label="C"></option>
               </select> */}
          
          
        </div>

        {formik.touched.security_qn && formik.errors.security_qn ? (
          <p>{formik.errors.security_qn}</p>
        ) : null}
        <br />
        
        <div className="inputfield">
         <label>Answer </label>
          <input
            type="text"
            name="security_ans"
            required
            autoComplete="off"
            value={formik.values.security_ans}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          
        </div>

        {formik.touched.security_ans && formik.errors.security_ans ? (
          <p>{formik.errors.security_ans}</p>
        ) : null} 
        <br />


        <div className="inputfield">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
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
            autoComplete="off"
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
        <div className="captcha">
        <Recaptcha
        
        sitekey='6Ldpbz0UAAAAAHWONmYJCv8nbMwG4w-htCr8iC1p'
        secretkey='6LdaqAUaAAAAADDxBzlEOWodcZDpymVMc_C-oW4f'
        render="explicit"
        theme="dark"
        verifyCallback={(response) =>  {
          console.log('response', response)
        formik.setFieldValue("captcha",response)
        setCaptcha(response); }}
        onloadCallback={() => { console.log("done loading!"); }}
        

        />
        </div>
        {formik.touched.captcha && formik.errors.captcha ? (
          <p>{formik.errors.captcha}</p>
          ) : null}
          <br/>
         


        <button className="sgnbutton" type="submit" >{btnText}</button>
        
      </form>
      
    </div>
  );
};

export default SignUp;
