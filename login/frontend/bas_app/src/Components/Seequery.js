import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Buydetails = () => {

    const[item,setitem] = useState();
    // this.state = {
    //     items: [],
    //     DataisLoaded: false
    //     };
        
    const [book,setbook] = useState();
    // useEffect(() => {
    //     const res = fetch("http://localhost:5000/get_user11");
    //     console.log(res);
    //   },[]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/get_user11").then((response)=> response.json)
    // .then((json)=> 
    // {
    //     console.log(json);
    //     setitem(json);
    // })
    //   },[]);

    // useEffect(()=>{
    //     fetch("http://localhost:5000/get_user11")
    // },[]);

    // fetch(
    //     "http://localhost:5000/get_user11")
    //     .then((res) => res.json())
    //     .then((json) => {
    //         this.setState({
    //             items: json,
    //             DataisLoaded: true
    //         });
    //     })

    const [openmodal, setopenmodal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/seequery')
        .then(res => {
            console.log(typeof res)
              return res.json();
        })
        .then(data => {
          console.log(data);
          setbook(data);
          // setcBooks(data);
        })
      },[]);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/manager/");    
    };


    return (

        <div class="searchedbooks">
            <div class="searchedbookhead">
                <h2>Hello, here are queries </h2>
            </div>
            {/* <div>
                {user.map((item4) => (
                    <ol key={item4.id} >
                        First_Name: {item4.FirstName},
                        Last_Name: {item4.LastName}
                    </ol>
                ))}
            </div> */}
            {/* <div>
                {book(0) && <p>{book(0).Name} <span>{book(0).Author}</span></p>}
            </div> */}
            {/* <select>
                {book.map((book) => {
                    return <option key={book.Name} value={country.id}>{country.name}</option>
                })}
            </select> */}
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>User</th>
                    <th>Status</th>
                </tr>
                {book?.map((item) => (
                    <tr key={item.Sno}>
                    <td>{item.Name}</td>
                    <td>{item.Author}</td>
                    <td>{item.ISBN}</td>
                    <td>{item.User}</td>
                    <td>{item.Status}</td>
                    </tr>
                ))}
            </table>

         <button class="sgnbuttonr" onClick={handleClick}>back</button>
        </div>

    );
}

export default Buydetails;