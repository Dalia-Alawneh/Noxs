import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TvShows() {
  let [Tv , setTv]=useState([]);
  let path='https://image.tmdb.org/t/p/original';
  async function TvDiscover(){
    let {data}=await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9b687ad3d2a762acf22e0d85aee194c9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0');
    setTv(data.results);
  }
  useEffect(()=>{
    TvDiscover();
  },[])
  return (<>
  <div className="margin">
  <h1 className="mt-5 mb-4">Tv Discover</h1>
    <div className="row">
    {Tv.length>0?Tv.map((tv,index)=>
      <div key={index} className="col-md-3">
        <img className="mt-2 w-100" src={path+tv.poster_path}/>
        <h2 className="mt-2 mb-5 text-center">{tv.name}</h2>

      </div>
      ):<div className="d-flex justify-content-center align-items-center ">
      <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
      </div>}
      </div></div>
  </>)
}
//https://api.themoviedb.org/3/discover/tv?api_key=9b687ad3d2a762acf22e0d85aee194c9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0