import classes from './Button.module.css';

const Button = ({ children, onClick, active }) => {
  return (
    <button
      className={`${classes.btn} ${active ? classes.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
