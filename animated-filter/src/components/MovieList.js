import { nanoid } from 'nanoid';

import MovieItem from './MovieItem';

import classes from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={classes.list}>
      {movies &&
        movies.map(movie => (
          <MovieItem
            key={nanoid()}
            title={movie.title}
            imageUrl={movie.backdrop_path}
          />
        ))}
    </div>
  );
};

export default MovieList;
