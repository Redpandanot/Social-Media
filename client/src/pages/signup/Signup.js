import React, { useState } from 'react'
import './Signup.scss';
import {Link} from "react-router-dom";
import { axiosClient } from '../../utils/axiosClient';

function Login() {
    const [name, setName]= useState('');
    const [email , setEmail]= useState('');
    const [password , setPassword]= useState('');

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response=await axiosClient.post('/auth/signup',{
                name,
                email,
                password
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='Signup'>
        <div className='signup-box'>
            <h2 className="heading">Signup</h2>
            <form id="form" onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input id="name" onChange={(e)=>{
                    setName(e.target.value);
                }}></input>
                <label htmlFor='email'>Email</label>
                <input id='email' onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
                <label htmlFor='password'>Password</label>
                <input id='password' onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
                <input type="submit" className="submit" />
            </form>
            <p className="subheading">
                    Already have an account?<Link to="/login">Login</Link>
            </p>
        </div>
    </div>
  )
}

export default Login;