import { Login } from "../components/Login"
import React from 'react';
import { Register } from "../components/Register";
import { Singers } from "../components/Singers";
export const Home = ()=>{
    return (
        <>
            <h1 className='alert-success text-center'>Music App</h1>
            {/* <Singers/> */}
            <Login/>
            <hr/>
            {/* <Register/> */}
        </>
    );
}