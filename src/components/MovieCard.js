import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie?.name}</h2>
      <Link to={`/movie/${movie?.id}`}>More</Link>
    </article>
  );
}

export default MovieCard;