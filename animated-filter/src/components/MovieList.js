import { nanoid } from 'nanoid';
import { motion, AnimatePresence } from 'framer-motion';

import MovieItem from './MovieItem';

import classes from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <motion.div layout className={classes.list}>
      {movies && (
        <AnimatePresence>
          {movies.map(movie => (
            <MovieItem
              key={nanoid()}
              title={movie.title}
              imageUrl={movie.backdrop_path}
            />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default MovieList;
