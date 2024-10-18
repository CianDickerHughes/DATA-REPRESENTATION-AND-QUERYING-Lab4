import { useState } from "react";

// Return the Create
const Create = () => {

  // array of movies of json
  // explain: it's a react hook that allows you to add state to a functional component
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // hands the sumbmits of title of the movies
  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {title, year, poster};
    console.log(movie);
  }

  // form to upload movies to the server
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} /* user add movie title*/ />
          <br/>
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }} /* user add movie year*/ />
          <br/>
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }} /* user add movie poster*/ />
          <br/>
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}
  
export default Create;