import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola click');
};

const Home = () => (
  <div>
    <h1>Welcome to my Next!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>Hola!</Button>
  </div>
);

export default Home;
