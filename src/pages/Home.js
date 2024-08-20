import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <main>
      <NavBar />  
      <h1>Home Page</h1>
      <section className="movies">

        {movies.map(movie => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home;
