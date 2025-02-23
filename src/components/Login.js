
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react"
import Footer from "./Footer";
function Login(){
    const [uname,setuname]=useState(null)
        const [password,setpass]=useState(null)
    function login(){
        if(uname==="alluarjun" && password==="iconstar"){
            window.location.replace('/')
        }
        else{
            alert("invalid uname or password")
        }
    }
    

    return (
        <div className="container">
            <div className="page">
                <img src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"alt="" className='front'></img>
            <div className="pageone">   
            <div className="first-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzmRGJF8UP4FiZ1yZWzoff-4ZO6zJ1BP0cA&s" alt="" className="title"></img>
                <input onChange={(event)=>{setuname(event.target.value)}} type="text" className="username inpt" placeholder="phone,username,or email address"/>
                <input onChange={(event)=>{setpass(event.target.value)}} type="text" className="password inpt" placeholder="password"/>
                <button onClick={login} className="loginbtn">log in</button>
                <p className="or">OR</p>
                <div className="facebook">
                <img className="fb" src="data:image/jpeg;base64,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" alt="" />
                <p className="logf">login with facebook</p>
                
                </div>
                <p className="pass">forgot password ?</p>
            </div>
            <div className="second-container">
                Don't have an account ? <Link to={"/Signup"}> Sign up</Link>  
            </div>
            <div className="third-container">
                <p className="getapp">Get the app</p>
            </div>
            <div className="fourth-container">
             <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="app appone"></img>
             <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="app"></img>
            </div>
            </div>
           </div>
            <Footer/>
        </div>
    )
}
export default Login;
