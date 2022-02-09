import { useState, useEffect } from 'react';

import key from './config/key';

import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [filtered, setFiltered] = useState();
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    try {
      const res = await fetch(
        ` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
      );
      const data = await res.json();
      setPopularMovies(data);
      setFiltered(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const setFilter = genre => {
    if (!genre) {
      setGenre(0);
      return setFiltered(popularMovies.results);
    }

    setGenre(genre);
    setFiltered(
      popularMovies.results.filter(movie => movie.genre_ids.includes(genre))
    );
  };

  console.log(genre);

  return (
    <div className="App">
      <Filter genre={genre} setFilter={genre => setFilter(genre)} />
      {popularMovies && <MovieList movies={filtered} />}
    </div>
  );
}

export default App;
