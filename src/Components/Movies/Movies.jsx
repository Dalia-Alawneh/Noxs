import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Movies() {
  let[Movies,setMovies]=useState([]);
  let path='https://image.tmdb.org/t/p/original';
  async function DiscoverMovies(){
    let {data}=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9b687ad3d2a762acf22e0d85aee194c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
    setMovies(data.results);
  }
  useEffect(()=>{
    DiscoverMovies();
  }
  ,[])
  return (
    <div className="margin">
      <h1 className="mb-4  mt-5">Discover Movies With Noxe</h1>
      <div className="row">
        {Movies.length>0?Movies.map((movie,index)=>
        <div key={index} className="col-md-4 mt-2">
          <img className="mb-4 w-100" src={path+movie.poster_path}/>
          <h2 className="mb-5 text-center">{movie.original_title}</h2>
        </div>
        ):<div className="d-flex justify-content-center align-items-center ">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>}
      </div>
</div>
  )
}
