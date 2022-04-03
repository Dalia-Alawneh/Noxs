import React  from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (<>
  <nav className={`navbar navbar-expand-lg navbar-light fixed-top mar ${style.bg} `}>
    <div className="container-fluid "> 
        <Link className="navbar-brand text-white" to="Home">Noxe</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
        <ul className=" text-white navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="text-white nav-link" to="Home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="text-white nav-link" to="Movies">Movies</Link>
            </li>
            
            <li className="nav-item ">
            <Link className="text-white nav-link" to="TvShows">Tv Shows</Link>
            </li>
            
        </ul>
        <ul className="navbar-nav ms-0">
        <li className="text-white nav-link"><i className="fa-brands fa-facebook"></i></li>
        <li className="text-white nav-link"><i className="fa-brands fa-instagram-square"></i></li>
        <li className="text-white nav-link"><i className="fa-brands fa-twitter"></i></li>
        <li className="nav-item ">
            <Link className="text-white nav-link" to="Login">Login</Link>
            </li>
            <li className="nav-item ">
            <Link className="text-white nav-link " to="Register">Register</Link>
            </li>
            {/* <li className="nav-item ">
            <Link className="text-white nav-link " to="Logout">Logout</Link>
            </li> */}
        </ul>
        </div>
    </div>
    </nav>
    </>
  )
}
