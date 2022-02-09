import classes from './MovieItem.module.css';

const MovieItem = ({ title, imageUrl }) => {
  return (
    <div className={classes.movie}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w400${imageUrl}`} alt={title} />
    </div>
  );
};

export default MovieItem;
