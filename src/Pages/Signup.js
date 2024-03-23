import React from "react";
import { useState } from "react";
import axios from "axios";

const Signup=()=>{
    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const [inputs, setInputs] =useState({})


    const handleSubmit=(event)=>{
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs);


    }
    return(
        <form onSubmit={handleSubmit}> 
            <label> Your Name:
                <input type="text" name="name" onChange={handleChange}/>
            </label><br/>
            <label>Your Email:
                <input type="email" name="email" onChange={handleChange}/>
            </label><br/>
            <label>Your Password:
                <input type="password" name="password" onChange={handleChange}/>
            </label><br/>
            <button>Save</button>
        </form>
    )
}
export default Signup;