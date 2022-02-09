import Button from './Button';
import classes from './Filter.module.css';

const Filter = ({ setFilter }) => {
  return (
    <div className={classes.filter}>
      <Button onClick={() => setFilter()}>all</Button>
      <Button onClick={() => setFilter(35)}>comedy</Button>
      <Button onClick={() => setFilter(28)}>action</Button>
    </div>
  );
};

export default Filter;
