import React from 'react';
import Button from '@material-ui/core/Button';
import Posts from '../components/Posts';

const handleClick = () => {
  console.log('Hola click');
};

const Home = () => (
  <div>
    <h1>Welcome to my Next App!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>Hola!</Button>
    <Posts />
  </div>
);

export default Home;
