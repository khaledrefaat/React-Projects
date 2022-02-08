import { useState, useEffect } from 'react';

import key from './config/key';

import './App.css';

function App() {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    let data;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
      );
      data = await res.json();
      setTrendingMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(trendingMovies);
  return (
    <div className="App">
      {trendingMovies &&
        trendingMovies.results.map(movie => (
          <div className="movie" key={Math.random()}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
