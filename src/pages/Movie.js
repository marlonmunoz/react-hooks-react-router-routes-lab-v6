import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar/>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
