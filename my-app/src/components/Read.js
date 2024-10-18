import Movies from "./Movies";
import { useEffect, useState  } from 'react';
import axios from "axios";

// The Read
const Read = () => {
    // array of movies of json
    const [movies, setMovies] = useState([]);

    // get movies from http
    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') // json http
          .then((response) => {
            setMovies(response.data.movies);
          })
          .catch((error) => { // error function
            console.log(error);
          });
      }, []);
    
    // return read component
    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={movies}/*PASS data to Movies.js*//>
        </div>
    );
  }
  
  export default Read;