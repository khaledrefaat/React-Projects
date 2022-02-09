import { useState, useEffect } from 'react';

import key from './config/key';

import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    let data;

    // `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    try {
      const res = await fetch(
        ` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
      );
      data = await res.json();
      setPopularMovies(data);
      setFiltered(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const setFilter = genre => {
    if (!genre) return setFiltered(popularMovies.results);

    setFiltered(
      popularMovies.results.filter(movie => {
        return movie.genre_ids.find(genreNum => genreNum === genre);
      })
    );
  };

  return (
    <div className="App">
      <Filter setFilter={genre => setFilter(genre)} />
      {popularMovies && <MovieList movies={filtered} />}
    </div>
  );
}

export default App;
