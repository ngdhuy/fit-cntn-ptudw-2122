import './style.css';

export default function Footer(props) {
  return (
    <div className='footer'>
      <div>This is footer</div>
      <p>{props.address}</p>
    </div>
  );
}