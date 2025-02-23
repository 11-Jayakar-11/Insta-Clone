import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/App.css"
import { MdHomeFilled } from "react-icons/md";
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CgAddR } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Left_side() {
  const [display,ChangeDisplay]=useState(false)
  const[menu,setmenu]=useState(false)
  const menuthis=()=>{
    setmenu(!menu)
  }
  return (
    <div className="main">
      <div className="left-side">
        <div>
          <img className="logo ms-3 mt-4" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="instagram"></img>
        </div>
        <button className='titem mt-5'> <div className='ticon d-flex'>
          <MdHomeFilled size={25} /> 
          <b><Link to={"/"} className='battan ms-2'>Home</Link></b>
        </div></button>
       
        <button className='titem mt-3' onClick={()=>(ChangeDisplay(!display))}><div className='ticon d-flex'>
          <SearchIcon size={25}/>
          <p className='ms-2'>Search</p>
           
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <ExploreOutlinedIcon size={25}/> 
          <p className='ms-2'>Explore</p>
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <InstagramIcon size={25}/> 
          <p className='ms-2'>Reels</p>
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <TelegramIcon size={25}/> 
          <p className='ms-2'>Messages</p>
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <FavoriteBorderIcon size={25}/> 
          <p className='ms-2'>Notifications</p>
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <CgAddR size={25}/> 
          <p className='ms-2'>Create</p>
        </div></button>
        <button className='titem mt-3'><div className='ticon d-flex'>
          <AccountCircleOutlinedIcon size={25}/> 
          <Link to={"/Profile"} className='battan ms-2'>Profile</Link>
        </div></button>
       
        <div className='left-down'>
        <button className='titem'><div className='thread d-flex ms-2'>
            <FaThreads size={22} className='tm'/> 
            <p className='ms-2'>Threads</p>
          </div></button>

          <button className='titem' onClick={menuthis}><div className='menu d-flex ms-2 '>
            <MenuIcon size={22} className='tm'/> 
            <p className='ms-2'>More</p>
          </div></button>
        </div>
        <Offcanvas show={display} className='w-25'>
          <Offcanvas.Body className='w-100' onClick={()=>(ChangeDisplay(!display))}>
              <h1>Search</h1>
              <input className='w-100 border border rounded bg-light mt-2' placeholder='search'></input>
              <hr></hr>
              <h6>Recent</h6>
              <div className='mt-5 ms-4'>
                <p> No recent searchs</p>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      
      <div>
          {menu? <div className='tmore1'>
            <div>
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <p className='ms-2'>Settings</p>
            </div></button>
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <p className='ms-2'>Your activity</p>
            </div></button>
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <p className='ms-2'>Saved</p>
            </div></button>
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <p className='ms-2'>Switch appearance</p>
            </div></button>
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
            <Link to={"/Signup"} className='battan ms-2'>Sign up</Link>
            </div></button>
    
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <Link to={"/Login"} className='battan ms-2'>Login</Link>
            </div></button>
         
            <button className='titem mt-3'><div className='ticon d-flex'>
            <ExploreOutlinedIcon size={25}/> 
               <p className='ms-2'>Log out</p>
            </div></button>
            </div>
            <div>
              

            </div>
          </div>:null}
      </div>
        
    </div>
  );

}

export default Left_side






