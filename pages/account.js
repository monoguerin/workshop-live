import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('Hola click');
};

const Account = () => (
  <div>
    <h1>Welcome to my asdasd!!</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>Hola account!</Button>
  </div>
);

export default Account;
