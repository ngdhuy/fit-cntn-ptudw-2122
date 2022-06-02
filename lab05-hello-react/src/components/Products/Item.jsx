import './style.css';

export default function Item(props) {
  return(
    <div className='item'>
      <div>{props.name}</div>
    </div>
  );
}