import React from 'react';
import Clock from '../Clock';
import Products from '../Products';
import './style.css'; 

class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <Clock />
        <Products />
      </div>
    );
  }
}

export default Content;