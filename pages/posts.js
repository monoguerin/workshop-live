import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola click');
};

const Posts = () => (
  <div>
    <h1>Welcome to my Posts!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>Hola posts!</Button>
  </div>
);

export default Posts;
