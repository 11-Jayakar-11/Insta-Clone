import 'bootstrap/dist/css/bootstrap.css';
import "../styles/App.css"
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Signup from "./Signup";
import Profile from './Profile';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
