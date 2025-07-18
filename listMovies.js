import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieList.css"; // for grid styling

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.tagline || "No tagline"}</p>
            <p>⭐ {movie.vote_average}/10</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
