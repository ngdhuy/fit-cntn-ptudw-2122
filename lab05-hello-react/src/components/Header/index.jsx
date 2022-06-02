import "./style.css";
// function components
function Header(props) {
  return(
    <h1 className="header">{props.title}</h1>
  );
}

export default Header;