import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Viewstat = (props) => {

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
        fetch('http://localhost:5000/viewstat')
        .then(res => {
            console.log(typeof res)
              return res.json();
        })
        .then(data => {
          console.log(data);
          setbook(data);
          var arr = data.map((item) => item.key)
          console.log(arr[0])
          props.setmode(arr[0])
          console.log("**********")
          console.log(props.mode)
          // setcBooks(data);
        })
      },[]);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/manager/");    
    };
    console.log(props.mode)


    // useEffect(()=>{
	// 	if(book?.map((item) => item.key
    //     ))
    //     {
    //         console.log("happen");
    //         setmode(true);
    //     }
	// }, [])

    return (

        <div class="searchedbooks">
            {(props.mode=="true") && <div class="searchedbookhead">
                <h2>Hello, here are Statistics </h2>
            </div>}
            {(props.mode=='false') && <div class="searchedbookhead">
                <h2>Hello, here Threshold for books </h2>
            </div>}
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
            
            {(props.mode=="true") &&<table>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Publisher</th>
                    <th>Total copies sold</th>
                    <th>Total profit</th>
                </tr>
                {book?.map((item) => (
                    <tr key={item.sno}>
                    <td>{item.Name}</td>
                    <td>{item.Author}</td>
                    <td>{item.ISBN}</td>
                    <td>{item.Publisher}</td>
                    <td>{item.Total_copies_sold}</td>
                    <td>{item.Total_profit}</td>
                    </tr>
                ))}
            </table>}

            {(props.mode=="false") &&<table>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Publisher</th>
                    <th>Below Threshold</th>
                    <th>Copies required</th>
                </tr>
                {book?.map((item) => (
                    <tr key={item.sno}>
                    <td>{item.Name}</td>
                    <td>{item.Author}</td>
                    <td>{item.ISBN}</td>
                    <td>{item.Publisher}</td>
                    <td>{item.Below_Threshold}</td>
                    <td>{item.Copies_required}</td>
                    </tr>
                ))}
            </table>}

         <button class="sgnbuttonr" onClick={handleClick}>back</button>
        </div>

    );
}

export default Viewstat;