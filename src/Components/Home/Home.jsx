import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  
let [MovieData,setMovieData]=useState([]);
let [TvData,setTvData]=useState([]);

let path='https://image.tmdb.org/t/p/original';
async function getApi(media,callback){
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=9b687ad3d2a762acf22e0d85aee194c9`);
  callback(data.results);

}

useEffect(()=>{
  getApi('movie',setMovieData);
  getApi('tv',setTvData);

},[])

  return (
    <>
    <div className="container margin">
      <div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div className="w-100">
      <div className="brdr mb-2 w-50"></div>
      <h2>Trending</h2>
      <h2>Movies</h2>
      <h2>To watch Now</h2>
      <div className="brdr mt-2 w-75"></div></div>
    </div>
        {MovieData.length>0?MovieData.map((movie,index)=>
        <div key={index} className="col-md-3">
          <Link to="Descreption"><img className="mt-2 w-100" src={path+movie.poster_path}/></Link>
          <h2 className="mt-2 mb-5 text-center">{movie.original_title}</h2>

        </div>
        ):<div className="d-flex justify-content-center align-items-center ">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>}

        
        
      </div>
      <div className="row mt-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className="w-100">
      <div className="brdr mb-2 w-50"></div>
      <h2>Trending</h2>
      <h2>Tv Shows</h2>
      <h2>To watch Now</h2>
      <div className="brdr mt-2 w-75"></div></div>
    </div>
        {TvData.length>0?TvData.map((tv,index)=>
        <div className="col-md-3">
          <img className="mt-2 w-100" src={path+tv.poster_path}/>
          <h2 className="mt-2 mb-5 text-center">{tv.name}</h2>

        </div>
        ):<div className="d-flex justify-content-center align-items-center ">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>}
      </div>
      
      </div>
    </>
  )
}

//https://api.themoviedb.org/3/trending/all/day?api_key=9b687ad3d2a762acf22e0d85aee194c9
//https://api.themoviedb.org/3/discover/movie?api_key=9b687ad3d2a762acf22e0d85aee194c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

//9b687ad3d2a762acf22e0d85aee194c9