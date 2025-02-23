import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Signup.css"
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Signup(){
    return (
        <div className="container">
            <div className="page">
            <img src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"alt="" className='frontins'></img>
            <div className="pageone">   
            <div className="first-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzmRGJF8UP4FiZ1yZWzoff-4ZO6zJ1BP0cA&s" alt="" className="title"></img>
                <p className='friends'>Sign up to see photos and videos</p>
                <p>from your friends.</p>
                <button className="loginbtn"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifhBwWgV_xNLjFzJFkzg1XExdYGqAwxHKEw&s'alt=''className='finbutton'></img> log in with facebook</button>
                <p className="or">OR</p>
                <input type="text" className="username inpt" placeholder="Mobile Number Or Email"/>
                <input type="text" className="password inpt" placeholder="Full Name"/>
                <input type="text" className="username inpt" placeholder="Username"/>
                <input type="text" className="password inpt" placeholder="Password"/>
                <p className='textp'>People who use our service may have uploaded <br></br>
                    your contact information to Instagram. Learn More</p>
                <p className='textp'>By signing up, you agree to our Terms , Privacy <br></br> Policy and Cookies Policy .</p>
                <button className="loginbtn">Signup</button>
                
               
               
            </div>
            <div className="second-container">
            Have an account? <Link to={"/Login"}> Log in</Link>  
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
export default Signup;