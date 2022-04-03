import './App.css';
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import People from "../People/People"
import Movies from "../Movies/Movies"
import NotFound from "../NotFound/NotFound"
import Login from "../Login/Login"
import Register from "../Register/Register"
import TvShows from "../TvShows/TvShows"
import { Routes,Route } from 'react-router';
import Logout from "../Logout/Logout"
function App() {
  return (
    <div className="bg text-white vh-100">
      <Navbar/>
      <div className="container mt-5">
      <Routes>
        <Route path="" element={<Home/>}></Route>

        <Route path="Home" element={<Home/>}></Route>
        {/* <Route path="Description" element={<Description />}></Route> */}
        <Route path="Movies" element={<Movies/>}>
                  {/* <Route path="Description" element={<Description />}></Route> */}
        </Route>
        <Route path="People" element={<People/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Login" element={<Logout/>}></Route>
        <Route path="Register" element={<Register/>}></Route>
        <Route path="NotFound" element={<NotFound/>}></Route>
        <Route path="TvShows" element={<TvShows/>}>
                  {/* <Route path="Description" element={<Description />}></Route> */}
        </Route>
      </Routes>
      </div>
      

      
    </div>
  );
}

export default App;
