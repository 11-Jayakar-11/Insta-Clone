import React from 'react'
import "../styles/Home.css"
import Homepage from "./Homepage.js";
import Left_side from './Left_side.js';
function Home() {
    const myStyles = {
        marginTop: '20%', 
    };
    

  return (


    <div className='Home'>
             <Left_side/>
        
            <Homepage/>

        <div className='Right-bar'>
            <div className='tleft'>
                
            </div>
            
            <div className='tmiddle'>
                <div className='theader d-flex'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p style={myStyles}>Switch</p></a>
                    </div>
                    
                </div>

                <div className='tbody mt-3 d-flex'>
                    <div className='hai'>
                        <p className='text-secondary '>Suggest for you</p>
                    </div>
                    <div className='hello'>
                        <p>See all</p>
                    </div>
                </div>
                <div className='tbody d-flex'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p style={myStyles}>follow</p></a>
                    </div>   
                </div>
                <div className='tbody d-flex mt-2'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p className='' style={myStyles}>follow</p></a>
                    </div>   
                </div>
                <div className='tbody d-flex mt-2'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p style={myStyles}>follow</p></a>
                    </div>   
                </div>
                <div className='tbody d-flex mt-2'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p style={myStyles}>follow</p></a>
                    </div>   
                </div>
                <div className='tbody d-flex mt-2'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p style={myStyles}>follow</p></a>
                    </div>   
                </div>


                <div className='tfooter'>
                    <p className='para text-secondary w-100' >AboutHelp.Press.APIJobs.PrivacyTerms.Locations.Language.Meta Verified© 2024 INSTAGRAM FROM META</p>
                </div>
            </div>

            <div className='tright'>
                
            </div>
        </div>
    </div>
  )
}

export default Home