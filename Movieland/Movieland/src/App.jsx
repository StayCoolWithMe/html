import { useState,useEffect } from "react"
import './App.css';
import {Cart} from './Cart'

const API_url='http://www.omdbapi.com?apikey=ec035eef';

export default function App() {
const [movies,setMovies]=useState([]);
const [searchterm,setSearchterm]=useState('');


  const SearchMovie=async(title)=>{
    const response=await fetch(`${API_url}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search); //Search is acutally a build in of the json 
  }

  useEffect(()=>{SearchMovie('One piece');},[]);
  
  return (
    <div className="app">

      <h1>Movieland</h1>
      <div className="search">
      <input type="text" placeholder="Search for movies" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)} />  
      <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
        alt="search"
        onClick={() => SearchMovie(searchterm)}/>
      </div>


      {/* Just to prevent that if the movie insert by user is unfound */}
      {
        movies?.length>0 
        ?(<div className="container">
          {movies.map((movie)=>
            (<Cart movie={movie}/>))}
       </div>)
       :(
        <div className="empty">
          <h2>No movies found</h2>
          </div>
       )
      }
    </div>
    
  )
}

