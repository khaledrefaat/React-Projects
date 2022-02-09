import Button from './Button';
import classes from './Filter.module.css';

const Filter = ({ setFilter, genre }) => {
  console.log(genre);
  return (
    <div className={classes.filter}>
      <Button active={genre === 0 ? true : false} onClick={() => setFilter()}>
        all
      </Button>
      <Button
        active={genre === 35 ? true : false}
        onClick={() => setFilter(35)}
      >
        comedy
      </Button>
      <Button
        active={genre === 28 ? true : false}
        onClick={() => setFilter(28)}
      >
        action
      </Button>
    </div>
  );
};

export default Filter;
