import classes from './MovieItem.module.css';
import { motion } from 'framer-motion';

const MovieItem = ({ title, imageUrl }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout
      className={classes.movie}
    >
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w400${imageUrl}`} alt={title} />
    </motion.div>
  );
};

export default MovieItem;
