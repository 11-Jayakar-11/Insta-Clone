import 'bootstrap/dist/css/bootstrap.css';
import "./styles/App.css"
import { BrowserRouter, Routes,Route, HashRouter} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from './components/Profile';
function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
