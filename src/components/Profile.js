import React, { useState } from 'react';
import logo from '../img/settings.png';
import '../styles/Profile.css';
import at from '../img/at.png';
import hl1 from '../img/hl1.png';
import hl2 from '../img/hl2.png';
import hl3 from '../img/hl3.png';
import hl4 from '../img/hl4.png';
import hl5 from '../img/hl5.png';
import hl6 from '../img/hl6.png';
import into from '../img/close.png';
import Left_side from './Left_side';

function Profile() {
    const [followers,setfollowers]=useState(false); 
    const [following,setfollowing]=useState(false);
    const [modalShowing, setModalShowing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const [items] = useState({
        stude: [
            { id: "1", images: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/06/10/Pictures/allu-arjun-alluarjun-facebook_ce4032e6-2efd-11e6-9019-0e3372d9e70b.jpg" },
            { id: "2", images: "https://wallpaperaccess.com/full/2389196.jpg" },
            { id: "3", images: "https://cdn.siasat.com/wp-content/uploads/2021/04/allu-arjun-1-1024x768.jpg" },  
            { id: "4", images: "https://cdn.wallpapersafari.com/4/51/K8Yio4.jpg" },
            { id: "5", images: "https://3.bp.blogspot.com/-V-7UbdXHu7g/WtV0Ge7YsSI/AAAAAAAAIGg/EWbKnZNEKUUUUCrC4n-tddbi_OjuJWEowCLcBGAs/s1600/allu-arjun-photos-19.jpg" },
            { id: "6", images: "https://indiancinemascreen.com/wp-content/uploads/2020/07/Allu-Arjun-Indian-Cinema-Screen-13-819x1024.jpg" },
            { id: "7", images: "https://wallpapercave.com/wp/wp8162857.jpg" },
            { id: "8", images: "https://i.pinimg.com/originals/ac/30/67/ac306768ac53a24fae6820c48e8de844.jpg" },
            { id: "9", images: "https://tse4.mm.bing.net/th/id/OIP.5io60UkRzyxQHlR3MZZQTgAAAA?rs=1&pid=ImgDetMain" },
            { id:"10",images:"https://www.socialnews.xyz/wp-content/uploads/2019/12/24/Butta-Bomma-song-from-Allu-Arjun-s-Ala-Vaikunthapurramuloo-garners-good-buzz--scaled-1024x687.jpg"},
            { id:"11",images:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/Chaitanya.jpeg"},
            { id:"12",images:"https://i.pinimg.com/originals/e7/da/d9/e7dad99633aa3c710bcc755cb33c9242.jpg"},
            { id:"13",images:"https://1.bp.blogspot.com/-cq_2S7lwdjU/XsuatGcPStI/AAAAAAAABNY/E-bMuTWhSvkxXZqsK2OuDfdBeQsBD1x4QCK4BGAsYHg/d/allu-arjun-latest-photos-2020-19.jpg"},
            { id:"14",images:"https://www.cinejosh.com/newsimg/newsmainimg/sharwanand-becomes-mahanubhavudu_b_0812160208.jpg"},
            { id:"15",images:"https://cdn.wallpapersafari.com/4/51/K8Yio4.jpg"},
            { id:"16",images:"https://i.pinimg.com/originals/f6/25/e4/f625e464fb136d46970211ac92d2b7a9.jpg"},
            {id:"17",images:"https://cdn.siasat.com/wp-content/uploads/2021/04/allu-arjun-1-1024x768.jpg"},
            {id:"18",images:"https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/06/10/Pictures/allu-arjun-alluarjun-facebook_ce4032e6-2efd-11e6-9019-0e3372d9e70b.jpg"}
          ]
    });

    const handleModel = (item)=> {
        setSelectedItem(item);
        setModalShowing(!modalShowing);
    };


  return (
    <div>
         <Left_side/>
    <div className='jfull-box d-flex'>
       
        <div>
      {followers?<div className='followers'>
        <div className='followers-1'>
          <h4>followers</h4>
          <img src={into} onClick={()=>{setfollowers(false)}}/>
        </div>
        <div className='followers-2'>
          <input placeholder='Search'></input>
          <div>

          </div>
        </div>
      </div>:null}
      {following?<div className='followers'>
        <div className='followers-1'>
          <h4>following</h4>
          <img src={into} onClick={()=>{setfollowing(false)}}/>
        </div>
        <div className='followers-2'>
          <input placeholder='Search'></input>
          <div>
          </div>
        </div>
      </div>:null}
      <div className='jprofile-box'>
        <div className='jprofile-box1'>
          <div className='jprofile-pic'>
            <img className='jimg' src='https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain'/>
          </div>
          <div className='jprofile-info'>
            <div className='jname'> 
              <span>alluarjunonline</span>
              <img src='https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000' />
              <button>Edit Profile</button>
              <button>View archive</button>
              <img src={logo}/>
            </div>
            <div className='jrange'>
              <div className='num1'><span>618</span>posts</div>
              <div className='num' onClick={()=>{setfollowers(!followers)}}><span>26.5M</span>followers</div>
              <div className='num' onClick={()=>{setfollowing(!following)}}><span >1</span>following</div>
            </div>
            <div className='jabout'>
              <h5>Allu Arjun</h5>
              <button><img src={at}/>alluarjunonline</button><br/>
              <span style={{fontSize:'14px', fontWeight:'lighter'}}>Artist</span><br/>
              <span>ACTOR</span><span style={{fontSize:'10px', marginLeft:'5px'}}>IN</span>
            </div>
          </div>
        </div>
        <div className='jprofile-box2'>
          <div className='jhl-box'>
            <div>
              <img src={hl1}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'25px'}}>MADAME TU...</div>
          </div>   
          <div className='jhl-box'>
            <div>
              <img src={hl2}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'40px'}}>MOVIES</div>
          </div> 
          <div className='jhl-box'>
            <div>
              <img src={hl3}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'45px'}}>Kids</div>
          </div> 
          <div className='jhl-box'>
            <div>
              <img src={hl4}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'30px'}}>AA CLICKS</div>
          </div> 
          <div className='jhl-box'>
            <div>
              <img src={hl5}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'30px'}}>Memories</div>
          </div> 
          <div className='jhl-box'>
            <div>
              <img src={hl6}/>
            </div>
            <div style={{fontWeight:'600', fontSize:'small', marginLeft:'40px'}}>1st Story</div>
          </div>       
        </div>
        <hr></hr>
      </div>
      <div className='profilepost'>
      <div className='cgrid me-25 ms-25'>
        <div className='d-flex'><img className='cimges me-2 mt-1' src="https://www.svgrepo.com/show/344890/grid-3x3.svg" alt="grid"></img>
       <h6>POSTS</h6></div>
       <div className='d-flex'><img className='cimges me-2 mt-1' src="data:image/png;base64,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" alt="reels"></img>
       <h6>REELS</h6></div>
        <div className='d-flex'><img  className="cimges me-2 mt-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMfVzFb3WuaDyUhavJOFKm9uRTw3UeOmQ_Q&s"alt="tagged"></img>
      <h6>tagged</h6></div>
      </div>
<br></br>

      <div className="cinstagram-grid"> 
      

          <div className="Profilepost2 me-25">
            {items.stude.map((item) => (
                    
                   <img onClick={() =>handleModel(item)} className="cposters"src={item.images} alt="images"></img>
            ))}
         
            </div>
            {modalShowing?<div  className='cpost'>
            <div className='cpost10'><img onClick={() =>handleModel()} className="cpostimage"src={selectedItem.images}></img> </div>
             
                <div>
                  <div className='tbody d-flex mt-2'>
                    <div className='hleft me-2'>
                        <img className='hprofile' src="https://th.bing.com/th/id/OIP.CPH8rrFIpcZx0wCZA17PvwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
                    </div>
                    <div className='hmiddle'>
                        <a className='aname'href="#"><p className='aname mt-2'>alluarjunonline</p></a>
                        <p className='aname'>Allu Arjun</p>
                    </div>
                    <div className='hright'>
                        <a href="#"><p >follow</p></a>
                    </div>   
                </div>
                  <div></div>
                  <div></div>
                </div>
</div>:null

            }
            

          </div>
    
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Profile