import './style.sass'; 

const SassNesting = (props) => {
  return(
    <div className='content'>
      <nav>
        <div>List of category</div>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
        <a href="https://www.google.com">Navigate to Google</a>
      </nav>
    </div>
  );
}

export default SassNesting;