import './style.sass';

const SassMixing = (props) => {
  const products = [
    {
      id: 1, 
      name: 'iPhone'
    }, 
    {
      id: 2, 
      name: 'iPad'
    }
  ];
  return(
    <div className='footer'>
      {
        products.map((item) => (
          <div className='item'>
            <span className='id'>{item.id}</span> - <span className='name'>{item.name}</span>
          </div>
        ))
      }
    </div>
  );
}

export default SassMixing;