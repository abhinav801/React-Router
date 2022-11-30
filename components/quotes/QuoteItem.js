import { NavLink } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {

  const to = `/quotes/${props.id}`
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <NavLink to={to} className='btn'>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;
