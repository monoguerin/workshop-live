import React from 'react';
import Button from '@material-ui/core/Button';
import Loading from '../components/Loading';
import Posts from '../components/Posts';
import useQuery from '../hooks/useQuery';
import usersQuery from './graphql/usersQuery';

const handleClick = () => {
  console.log('Hola click');
};

const Home = () => {
  const {
    data,
    error,
    loading,
  } = useQuery(usersQuery);

  if (error) {
    return null;
  }

  return (
    loading
      ? <Loading />
      : (
        <div>
          <h1>Welcome to my Next!!</h1>
          <p>{JSON.stringify(data)}</p>
          <Button variant="contained" color="primary" onClick={handleClick}>Hola!</Button>
          <Posts />
        </div>
      )
  );
};

export default Home;
